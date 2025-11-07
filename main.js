// Terminal functionality
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
const inputDisplay = document.getElementById('input-display');
const timestampElement = document.getElementById('timestamp');

// Command responses
const commands = {
    help: `Available commands:

    help          - Show available commands
    about         - Learn more about me
    skills        - Check out my technical skills
    experience    - See my work experience
    contact       - Get my contact information
    education     - View my educational background
    sudo          - Try it and see!
    clear         - Clear the terminal`,

    about: `About Me

I am a motivated and adaptable professional with experience in customer service and technical studies in IT systems and networks. I’ve developed strong teamwork, communication, and problem-solving skills through hands-on work in both the restaurant and maintenance industries. Currently, I’m pursuing a career as an IT Systems and Networks Technician, where I can apply my technical knowledge, practical experience, and passion for technology in a dynamic and evolving work environment.`,



    skills: `
Technical Skills:

Hardware assembly, repair and maintenance
Operating Systems: Windows, Linux, MacOS
Network setup and configuration (LAN, routers, basic switching)
Technical Support & Troubleshooting (onsite and remote)
Office & Productivity Tools (Microsoft Office · Google Workspace)
Telecommunications and basic domotics installations
End-user IT Support & System Maintenance
Frontend: HTML & CSS

Personal Skills:
Communication & customer service
Teamwork and collaboration
Leadership and staff coordination
Problem-solving and adaptability
Responsibility and initiative
Ability to work under pressure
Task and time management

Languages:
English: Fluent
Spanish: Fluent
Hindi / Urdu: Fluent
Catalan: Good 
    `,

    experience: `Work Experience

Head Manager | Restaurant Can Bou
2024 - 10/2025
  •Shift Supervisor: Managed daily operations and coordinated staff schedules
  •Stock Manager: Oversaw inventory and supply management
  •Personnel Management: Supervised and trained a team of 3–5 staff members
  •Bar & Service Roles: Worked as Barman, Cashier, Waiter, Barista, and Kitchen Assistant as needed
  •Customer Service: Ensured high-quality service and resolved customer issues

Intern | Electrical Assistant Intern | NH Hoteles (Hotel NH Constanza)
2023 - 2023
  •Performed electrical maintenance and general electrical repairs
  •Assisted with preventive maintenance of hotel facilities
  •Supported the repair and upkeep of HVAC and plumbing systems
  •Collaborated with the team to ensure the efficient operation of hotel facilities`,

    contact: `Contact Information

📧 Email: <span class="copy" data-copy="muhammadsohaibellahi@gmail.com">muhammadsohaibellahi@gmail.com</span>
📞 Phone: <span class="copy" data-copy="+34 693252305">+34 693252305</span>
💼 LinkedIn: <a href="https://www.linkedin.com/in/muhammad-sohaib-ellahi-859531310" target="_blank" class="terminal-link">https://www.linkedin.com/in/muhammad-sohaib-ellahi-859531310</a>
🌐 Website: <a href="https://www.muhammadsohaibellahi.eu" target="_blank" class="terminal-link">muhammadsohaibellahi.eu</a>

Feel free to reach out! I'm always open to interesting conversations
and collaboration opportunities.`,

    education: `Education
Microcomputer Systems and Networks (CFGM)
CFP Llefià | 2023 – Present
• Assembly and maintenance of computer equipment
• Single-user operating systems and office applications
• Local area network (LAN) configuration and management
• Training in professional orientation, entrepreneurship, and workplace skills
• Technical English for IT and networking

Technical Assistant in Electrical and Electrotechnical Installation Operations
CFP Llefià | 2022 – 2023
• Studied electrical and home automation installations in buildings
• Learned telecommunications system setup and maintenance
• Performed low-voltage electrical and smart-building maintenance operations
• Completed an integrated project applying theoretical and practical skills

`,

    sudo: `[sudo] password for portfloio:

Nice try! 😄

You don't have permission to use sudo in this portfolio.
But I appreciate your curiosity!`,

    clear: 'CLEAR_TERMINAL'
};

// Update timestamp
function updateTimestamp() {
    const now = new Date();
    timestampElement.textContent = now.toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}

// Initialize timestamp and update every second
updateTimestamp();
setInterval(updateTimestamp, 1000);

// Display command input as user types
terminalInput.addEventListener('input', (e) => {
    inputDisplay.textContent = e.target.value;
});

// Handle command submission
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value.trim().toLowerCase();

        if (command) {
            // Create command block
            const commandBlock = document.createElement('div');
            commandBlock.className = 'command-block';

            // Add command line
            const commandLine = document.createElement('div');
            commandLine.className = 'command-line';
            commandLine.innerHTML = `
                <span class="prompt">Sohaib@portfolio:~$</span>
                <span>${terminalInput.value}</span>
            `;
            commandBlock.appendChild(commandLine);

            // Add response
            if (command === 'clear') {
                terminalOutput.innerHTML = '';
            } else {
                const response = document.createElement('div');
                response.className = 'response';

                if (commands[command]) {
                    response.innerHTML = commands[command];
                } else {
                    response.textContent = `Command not found: ${command}\nType 'help' to see available commands.`;
                }

                commandBlock.appendChild(response);
                terminalOutput.appendChild(commandBlock);

                // Scroll to bottom
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        }

        // Clear input
        terminalInput.value = '';
        inputDisplay.textContent = '';
    }
});

// Keep input focused
document.addEventListener('click', () => {
    terminalInput.focus();
});

// Focus input on load
terminalInput.focus();

console.log('Terminal loaded successfully! Type "help" to get started.');

// Handle clicks on copyable items
terminalOutput.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('copy')) {
        const text = target.getAttribute('data-copy');
        navigator.clipboard.writeText(text)
            .then(() => {
                alert(`Copied: ${text}`);
            })
            .catch(err => console.error('Copy failed', err));
    }
});
