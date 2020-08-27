let RecruiterEmail = function(recipient, sender) {

    let currentPitch = 0;

    let elements = {
        salutation: document.getElementById('salutation'),
        pitch: document.getElementById('pitch'),
        affirmativeResponse: document.getElementById('affirmative-response'),
        negativeResponse: document.getElementById('negative-response'),
        sender: document.getElementById('sender')
    };

    recipient = recipient || 'Person Who Showed Up In a LinkedIn Search';

    if (sender && typeof(sender) !== 'object') {
        console.log('sender argument must be an object');
        return false;
    }

    sender = sender || {
        firstName: 'Gary',
        lastLname: 'McRecuiterpants',
        phone: '1-800-555-1234',
        email: 'recruiterpants@aol.com'
    };

    let pitches = [
        'Challenging, where I get to come into work and be able to use my creative side to develop new applications and break down existing applications in order to improve them.',
        'Be challenged to bring your creative skills in, to be part of the solutions to complex problems and be valued.',
        'Where I want to wake up every day wanting to go to work, love the people I work with, and feel compensated for my worth.',
        'Able to keep learning new technologies and putting them to good use while I do all the above.'
    ];

    let affirmativeResponses = [
        `Yes ${sender.firstName}, contact me because I desire this.`,
        'Right on!',
        'You had me at "hello".',
        `Now you're just toying with me ${sender.firstName}!`
    ];


    let negativeResponse = `No ${sender.firstName}, I want none of these things and want to be stagnant with my same old job and to be phased out of new opportunities.`;

    let valueProposition = 'Staying on top of your industry is necessary. Partner with an actual IT guy not a recruiter that just cares about money and shoving you through a square hole.';

    function init() {
        elements.salutation.innerHTML = `${recipient},`;
        elements.pitch.innerHTML = pitches[currentPitch];
        elements.affirmativeResponse.innerHTML = affirmativeResponses[0];
        elements.negativeResponse.innerHTML = negativeResponse;

        let senderEmailLink = `<a href="mailto:${sender.email}">${sender.email}</a>`;
        elements.sender.innerHTML = `${sender.firstName} ${sender.lastName}<br>${senderEmailLink}<br>${sender.phone}`;

    }

    init();

    this.nextPitch = function() {
        currentPitch++;
        if (currentPitch > pitches.length - 1) {
            document.location.assign(`mailto:${sender.email}?subject=Hey! Give me a job, jerk!`);
        } else {
            elements.pitch.innerHTML = pitches[currentPitch];
            elements.affirmativeResponse.innerHTML = affirmativeResponses[currentPitch];
        }
    };

    this.noThanks = function() {
        alert(valueProposition);
    };
};
