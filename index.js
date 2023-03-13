import { supervizSdk, isIphone, myParticipantId } from "./modules/superviz/supervizSdk.js"
import { changeContent, matterportSdk } from './modules/matterport/matterportSdk.js'

const CONTENT_SYNC_PROPERTY = "content";
const POSITIONS_SYNC_PROPERTY = "positions";
const SWEEPS_SYNC_PROPERTY = "sweeps";
let matterportPluginInstance = null;
const iframeMeetingSettings = document.getElementById("sv-video-frame");

let currentContent;

let myParticipant;
let followParticipantId;
let participantList = [];
let positions = {};
let sweeps = {};


// verify if meeting settings iframe is loaded
iframeMeetingSettings.addEventListener("load", function() {
    document.getElementById("loader-ms").style.display = "none";
});

function loadPlugin() {

    if(isIphone()) {
        subscribeToMatterportCameraEvent();
        subscribeToMatterportSweepEvent();
        return;
    }

    const plugin = new window.MatterportPlugin(matterportSdk);
    matterportPluginInstance = supervizSdk.loadPlugin(plugin, {
        avatarConfig: {
            height: 0,
            scale: 1,
            laserOrigin: { x: 0.2, y: -0.2, z: 0 },
        },
        isAvatarsEnabled: true,
        isLaserEnabled: true,
        isNameEnabled: true,
    });
}

// interface buttons to open close
document.getElementById('collapsedButton').onclick = function () {
    if (document.getElementById('sectionReady').classList.contains('hidden')) {
        return document.getElementById('sectionReady').classList.toggle('hidden')
    }
    document.getElementById('sectionReady').classList.add('hidden');
};

// send change content sync
const syncContent = function (newModelSid) {
    supervizSdk.setSyncProperty(CONTENT_SYNC_PROPERTY, newModelSid);

    if(newModelSid === currentContent) return;

    changeContent(newModelSid);
    currentContent = newModelSid;
}

// received matterport loaded new content
export const onContentChanged = () => {
    if(matterportPluginInstance) {
        supervizSdk.unloadPlugin(); // disconnect plugin
    }

    loadPlugin(); // reconnect plugin
}
const checkFollowParticipant = () => {
    if (followParticipantId) {
        positions[myParticipantId] = positions[followParticipantId];
        sweeps[myParticipantId] = sweeps[followParticipantId];
        moveToSweep(sweeps[myParticipantId], positions[myParticipantId].rotation);
    }
}
const onLocalCameraMoveObserver = ({ position, rotation }) => {
    positions[myParticipantId] = { position, rotation };
    syncMyPosition();
}
const onLocalSweepChangeObserver = (currentSweep) => {
    if (currentSweep && currentSweep.id) {
        sweeps[myParticipantId] = currentSweep.id;
        syncMySweep();
    }
}

//Subscribe to matterport events
const subscribeToMatterportCameraEvent = () => {
    matterportSdk.Camera.pose.subscribe(onLocalCameraMoveObserver);
}
const subscribeToMatterportSweepEvent = () => {
    matterportSdk.Sweep.current.subscribe(onLocalSweepChangeObserver);
}


const syncMyPosition = () => {
    supervizSdk.setSyncProperty(POSITIONS_SYNC_PROPERTY, positions);
}
const syncMySweep = () => {
    supervizSdk.setSyncProperty(SWEEPS_SYNC_PROPERTY, sweeps);
}
const moveToSweep = (sweepId, rotation = { x: 0, y: 0 }) => {
    matterportSdk.Sweep.moveTo(sweepId, {
        transitionTime: 500,
        transition: matterportSdk.Sweep.Transition.FLY,
        rotation,
    })
}
const onPositionsChange = (payload) => {
    positions = {...payload};
    checkFollowParticipant();
}
const onSweepsChange = (payload) => {
    sweeps = {...payload};
    checkFollowParticipant();
}
const goToPosition = (participantId) => {
    const sweepId = sweeps[participantId];
    const rotation = positions[participantId].rotation;
    moveToSweep(sweepId, rotation);
}

//Subscribe to SuperViz events
supervizSdk.subscribe(POSITIONS_SYNC_PROPERTY, onPositionsChange);

supervizSdk.subscribe(SWEEPS_SYNC_PROPERTY, onSweepsChange);

supervizSdk.subscribe(CONTENT_SYNC_PROPERTY, function (newModelSid) {
    if(newModelSid === currentContent) {
        return;
    }

    if (matterportPluginInstance) { // disconnect from plugin if there is one
        supervizSdk.unloadPlugin();
        matterportPluginInstance = null;
    }


    changeContent(newModelSid); // send change content to matterport // see modules/matterport/matterportSdk.js
    currentContent = newModelSid;
});

supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_PARTICIPANT_JOINED, (participant) => {
    myParticipant = participant;

    document.getElementById("wrapper").style.display = "none";
    // interface buttons to change content
    document.getElementById('v4LWLiLDm3s').onclick = function () {
        syncContent('v4LWLiLDm3s');
        document.getElementsByClassName('project-name')[0].classList.remove('active');
        document.getElementsByClassName('project-name')[1].classList.remove('active');
        document.getElementsByClassName('project-name')[2].classList.remove('active');
        document.getElementsByClassName('project-name')[3].classList.remove('active');
        document.getElementById('v4LWLiLDm3s').getElementsByClassName('project-name')[0].classList.add('active');
    };
    document.getElementById('zWpt6DAXDJw').onclick = function () {
        syncContent('zWpt6DAXDJw');
        document.getElementsByClassName('project-name')[0].classList.remove('active');
        document.getElementsByClassName('project-name')[1].classList.remove('active');
        document.getElementsByClassName('project-name')[2].classList.remove('active');
        document.getElementsByClassName('project-name')[3].classList.remove('active');
        document.getElementById('zWpt6DAXDJw').getElementsByClassName('project-name')[0].classList.add('active');
    };
    document.getElementById('KSParQVSEKy').onclick = function () {
        syncContent('KSParQVSEKy');
        document.getElementsByClassName('project-name')[0].classList.remove('active');
        document.getElementsByClassName('project-name')[1].classList.remove('active');
        document.getElementsByClassName('project-name')[2].classList.remove('active');
        document.getElementsByClassName('project-name')[3].classList.remove('active');
        document.getElementById('KSParQVSEKy').getElementsByClassName('project-name')[0].classList.add('active');
    };
    document.getElementById('toTRYzoAMdT').onclick = function () {
        syncContent('toTRYzoAMdT');
        document.getElementsByClassName('project-name')[0].classList.remove('active');
        document.getElementsByClassName('project-name')[1].classList.remove('active');
        document.getElementsByClassName('project-name')[2].classList.remove('active');
        document.getElementsByClassName('project-name')[3].classList.remove('active');
        document.getElementById('toTRYzoAMdT').getElementsByClassName('project-name')[0].classList.add('active');
    };

    amplitude.track("Enter example", {
      exampleName: "matterport-change-project-demo",
    });
});

supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MEETING_PARTICIPANT_LIST_UPDATE, (participants) => {
    const isHost = participants.find(participant => participant?.id === myParticipant?.id)?.isHost;

    if(participants.length === 1 && !participantList.length) {
        syncContent('v4LWLiLDm3s');
    }

    if(participantList.length < participants.length && isHost)  {
        syncContent(currentContent);
    }

    participantList = participants;
})

supervizSdk.subscribe(SuperVizSdk.RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT, (participantId) => {
    if (participantId !== myParticipantId) {
        followParticipantId = participantId;
    }
})

supervizSdk.subscribe(SuperVizSdk.RealtimeEvent.REALTIME_GATHER, () => {
    const hostId = participantList.find(participant => participant.isHost)?.id;
    goToPosition(hostId);
})

supervizSdk.subscribe(SuperVizSdk.RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, (participantId) => {
    goToPosition(participantId);
})
