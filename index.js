import { supervizSdk, isIphone } from "./modules/superviz/supervizSdk.js"
import { changeContent, matterportSdk } from './modules/matterport/matterportSdk.js'

const CONTENT_SYNC_PROPERTY = "content";
let matterportPluginInstance = null;
const iframeMeetingSettings = document.getElementById("sv-video-frame");

let currentContent;

let myParticipant;
let participantList = []


// verify if meeting settings iframe is loaded
iframeMeetingSettings.addEventListener("load", function() {
    document.getElementById("loader-ms").style.display = "none";
});

function loadPlugin() {
    
    if(isIphone()) return;

    const plugin = new window.MatterportPlugin(matterportSdk);
    matterportPluginInstance = supervizSdk.loadPlugin(plugin, {
        avatarConfig: {
            height: 0,
            scale: 1,
            laserOrigin: { x: 0.2, y: -0.2, z: 0 }
        },
        isAvatarsEnabled: true,
        isLaserEnabled: true,
        isNameEnabled: true
    });
}

// joined meeting
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_PARTICIPANT_JOINED, (participant) => {
    myParticipant = participant;

    document.getElementById("wrapper").style.display = "none";
    // interface buttons to change content
    document.getElementById('v4LWLiLDm3s').onclick = function () {
        syncContent('v4LWLiLDm3s')
        document.getElementsByClassName('project-name')[0].classList.remove('active')
        document.getElementsByClassName('project-name')[1].classList.remove('active')
        document.getElementsByClassName('project-name')[2].classList.remove('active')
        document.getElementsByClassName('project-name')[3].classList.remove('active')
        document.getElementById('v4LWLiLDm3s').getElementsByClassName('project-name')[0].classList.add('active')
    };
    document.getElementById('zWpt6DAXDJw').onclick = function () {
        syncContent('zWpt6DAXDJw')
        document.getElementsByClassName('project-name')[0].classList.remove('active')
        document.getElementsByClassName('project-name')[1].classList.remove('active')
        document.getElementsByClassName('project-name')[2].classList.remove('active')
        document.getElementsByClassName('project-name')[3].classList.remove('active')
        document.getElementById('zWpt6DAXDJw').getElementsByClassName('project-name')[0].classList.add('active')
    };
    document.getElementById('KSParQVSEKy').onclick = function () {
        syncContent('KSParQVSEKy')
        document.getElementsByClassName('project-name')[0].classList.remove('active')
        document.getElementsByClassName('project-name')[1].classList.remove('active')
        document.getElementsByClassName('project-name')[2].classList.remove('active')
        document.getElementsByClassName('project-name')[3].classList.remove('active')
        document.getElementById('KSParQVSEKy').getElementsByClassName('project-name')[0].classList.add('active')
    };
    document.getElementById('toTRYzoAMdT').onclick = function () {
        syncContent('toTRYzoAMdT')
        document.getElementsByClassName('project-name')[0].classList.remove('active')
        document.getElementsByClassName('project-name')[1].classList.remove('active')
        document.getElementsByClassName('project-name')[2].classList.remove('active')
        document.getElementsByClassName('project-name')[3].classList.remove('active')
        document.getElementById('toTRYzoAMdT').getElementsByClassName('project-name')[0].classList.add('active')
    };
});

supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MEETING_PARTICIPANT_LIST_UPDATE, (participants) => {
    const isHost = participants.find(participant => participant.id === myParticipant.id).isHost;
    
    if(participants.length === 1 && !participantList.length) { 
      syncContent('v4LWLiLDm3s')
    }

    if(participantList.length < participants.length && isHost)  {
      syncContent(currentContent)
    }

    participantList = participants;
})

// interface buttons to open close
document.getElementById('collapsedButton').onclick = function () {
    if (document.getElementById('sectionReady').classList.contains('hidden')) {
        return document.getElementById('sectionReady').classList.toggle('hidden')
    }
    document.getElementById('sectionReady').classList.add('hidden')
};
// send change content sync
const syncContent = function (newModelSid) {
    supervizSdk.setSyncProperty(CONTENT_SYNC_PROPERTY, newModelSid);

    if(newModelSid === currentContent) return;

    changeContent(newModelSid);
    currentContent = newModelSid;
}

// receive change content sync
supervizSdk.subscribe(CONTENT_SYNC_PROPERTY, function (newModelSid) {
    if(newModelSid === currentContent) {
        return;
    };
    
    if (matterportPluginInstance) { // disconnect from plugin if there is one
        supervizSdk.unloadPlugin();
        matterportPluginInstance = null;
        changedContent = true;
    }

    
    changeContent(newModelSid); // send change content to matterport // see modules/matterport/matterportSdk.js
    currentContent = newModelSid;
});

// received matterport loaded new content
export const onContentChanged = () => {
    if(matterportPluginInstance) { 
        supervizSdk.unloadPlugin() // disconnect plugin
    }

    loadPlugin(); // reconnect plugin
}
