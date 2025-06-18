document.getElementById('chatbot-icon').addEventListener('click', () => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
});

document.getElementById('close-chat').addEventListener('click', () => {
    document.getElementById('chat-window').classList.add('hidden');
});

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-message').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

document.getElementById('menu-toggle').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

async function sendMessage() {
    const input = document.getElementById('user-message');
    const chatMessages = document.getElementById('chat-messages');
    const message = input.value.trim();
    if (!message) return;

    // Add user message
    const userBubble = document.createElement('div');
    userBubble.className = 'flex items-start gap-2 p-2 mb-2 justify-end';
    userBubble.innerHTML = `
        <div class="bg-purple-100 p-2 rounded-lg max-w-[75%] text-sm shadow-sm">
            ${message}
        </div>
        <div class="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-semibold">U</div>
    `;
    chatMessages.appendChild(userBubble);

    // Add typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'flex items-center gap-1 p-2 mb-2';
    typingIndicator.innerHTML = `
        <div class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold">B</div>
        <div class="bg-gray-200/80 backdrop-blur-sm p-2 rounded-lg">
            <span class="typing-dot inline-block w-1.5 h-1.5 bg-blue-600 rounded-full" style="--delay: 0s;"></span>
            <span class="typing-dot inline-block w-1.5 h-1.5 bg-blue-600 rounded-full ml-1" style="--delay: 0.2s;"></span>
            <span class="typing-dot inline-block w-1.5 h-1.5 bg-blue-600 rounded-full ml-1" style="--delay: 0.4s;"></span>
        </div>
    `;
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const res = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const data = await res.json();

        // Remove typing indicator
        typingIndicator.remove();

        // Add bot response
        const botBubble = document.createElement('div');
        botBubble.className = 'flex items-start gap-2 p-2 mb-2';
        botBubble.innerHTML = `
            <div class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold">B</div>
            <div class="bg-white/80 backdrop-blur-sm p-2 rounded-lg max-w-[75%] text-sm shadow-sm">
                ${data.response}
            </div>
        `;
        chatMessages.appendChild(botBubble);
    } catch (err) {
        // Remove typing indicator
        typingIndicator.remove();

        // Add error message
        const errorBubble = document.createElement('div');
        errorBubble.className = 'flex items-start gap-2 p-2 mb-2';
        errorBubble.innerHTML = `
            <div class="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-semibold">B</div>
            <div class="bg-red-100/80 backdrop-blur-sm p-2 rounded-lg max-w-[75%] text-sm shadow-sm">
                Sorry, something went wrong.
            </div>
        `;
        chatMessages.appendChild(errorBubble);
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
    input.value = '';
}