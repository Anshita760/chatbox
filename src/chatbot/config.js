import { createChatBotMessage } from 'react-chatbot-kit';
// import { botMessage } from 'react-chatbot-kit/build/src/components/Chat/chatUtils';

const botName = "Smart Bot"
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;