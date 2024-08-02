document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    const projectInfo = document.getElementById('project-info');

    const projects = {
        'HTML': {
            img: 'cms-image.jpg',
            title: 'CMS GUI Website Builder',
            description: 'A user-friendly CMS GUI for building websites with drag-and-drop functionality. This is a based on same concept like adobe and figma. User is no more needed to write code but use only the mouse to select and edit the attributes to design the page.',
        },
        'CSS': {
            img: 'room-image.jpg',
            title: 'App and Website for Room Finding',
            description: 'A app for hotel managment and finding room for rent in the local area. The app gives the functionality of add rooms to the server list and allow user to search for rooms. If the room is no more available to be rented owner can hide the listing any time without loosing the rooms listing data used for future listing.',
        },
        'JS': {
            img: 'bot-image.jpg',
            title: 'Telegram Chat Bot',
            description: 'A chat bot for Telegram to automate responses and provide information. Its is a project made on python using telgram-python library provided by telegram.org. Chat bot was a prototype for room finding app to demostrate the easy one step process to implement the features of app it chatbot. Chat bot uses MySQL as the database.',
        },
        'App': {
            img: 'nurse-image.jpg',
            title: 'E-nurse Health Monitoring App',
            description: 'An app to monitor health metrics like heart rate and activity levels. Its is a virtual nurse that take record of your medicines and physical readings, it has a unique feature to continously monitor heart rate and give alerts for uneven heart reading and protect from heart attacks. Features like wakeup alarm, Walking, medication timer and reminders are available in the app.',
        },
        'flutter': {
            img: 'bot-image.jpg',
            title: 'Room Finder App',
            description: 'A app for hotel managment and finding room for rent in the local area. The app gives the functionality of add rooms to the server list and allow user to search for rooms. If the room is no more available to be rented owner can hide the listing any time without loosing the rooms listing data used for future listing.',
        },
        'sql': {
            img: 'bot-image.jpg',
            title: 'Telegram Chat Bot',
            description: 'A chat bot for Telegram to automate responses and provide information. Its is a project made on python using telgram-python library provided by telegram.org. Chat bot was a prototype for room finding app to demostrate the easy one step process to implement the features of app it chatbot. Chat bot uses MySQL as the database.',
        },
        // Add more skills and projects as needed
    };

    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            const skillName = skill.getAttribute('data-skill');
            if (projects[skillName]) {
                const { img, title, description } = projects[skillName];
                projectInfo.innerHTML = `
                    <div>
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>
                `;
                projectInfo.style.display = 'block';
            }
        });

        skill.addEventListener('mouseout', () => {
            projectInfo.style.display = 'none';
        });
    });
});
