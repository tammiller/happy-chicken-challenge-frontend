import 'dotenv/config';

// export AppConfig {
//   API_URL: string,
//   API_TOKEN: string,
// }


export default {
  name: 'CoolApp',
  version: '1.0.0',
  extra: {
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
    eas:{
      projectId: '4530efcb-daa2-4bf0-8fec-b4c687303464'
    }
  },
};