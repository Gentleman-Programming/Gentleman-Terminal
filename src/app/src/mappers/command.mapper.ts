import { AvailableInformation, Commands } from '../models/command-line.model';

export const getCommandFromString = (text: string) => {
  const splittedText = text.split(' ');
  const command = text.split(' ')[0];
  return {
    command,
    text: splittedText.slice(1).join(),
  };
};

export const CommandMapper = (command: string, payload?: string) => {
  switch (command) {
    case Commands.HELP: {
      return `Command list:
- sudo: sudo command needed to access personal information
- list: list all possible personal information
- clear: clear terminal history
      `;
    }
    case Commands.LIST: {
      return `Available information:
- WIG: What is Gentleman Programming ?
- SN: Social Networks
- WTS: Website's Tech Stack
    `;
    }
    case Commands.SUDO: {
      let result = '';
      switch (payload) {
        case AvailableInformation.WIG: {
          result = `             ██████╗ ███████╗███╗   ██╗████████╗██╗     ███████╗███╗   ███╗ █████╗ ███╗   ██╗
            ██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██║     ██╔════╝████╗ ████║██╔══██╗████╗  ██║
            ██║  ███╗█████╗  ██╔██╗ ██║   ██║   ██║     █████╗  ██╔████╔██║███████║██╔██╗ ██║
            ██║   ██║██╔══╝  ██║╚██╗██║   ██║   ██║     ██╔══╝  ██║╚██╔╝██║██╔══██║██║╚██╗██║
            ╚██████╔╝███████╗██║ ╚████║   ██║   ███████╗███████╗██║ ╚═╝ ██║██║  ██║██║ ╚████║
            ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝

  ██████╗ ██████╗  ██████╗  ██████╗ ██████╗  █████╗ ███╗   ███╗███╗   ███╗██╗███╗   ██╗ ██████╗
  ██╔══██╗██╔══██╗██╔═══██╗██╔════╝ ██╔══██╗██╔══██╗████╗ ████║████╗ ████║██║████╗  ██║██╔════╝
  ██████╔╝██████╔╝██║   ██║██║  ███╗██████╔╝███████║██╔████╔██║██╔████╔██║██║██╔██╗ ██║██║  ███╗
  ██╔═══╝ ██╔══██╗██║   ██║██║   ██║██╔══██╗██╔══██║██║╚██╔╝██║██║╚██╔╝██║██║██║╚██╗██║██║   ██║
  ██║     ██║  ██║╚██████╔╝╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║██║██║ ╚████║╚██████╔╝
  ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝

                                          ░░░░░░      ░░░░░░
                                        ░░░░░░░░░░  ░░░░░░░░░░
                                      ░░░░░░░░░░░░░░░░░░░░░░░░░░
                                    ░░░░░░░░░░▒▒▒▒░░▒▒▒▒░░░░░░░░░░
                                  ░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░
                      ▒▒        ░░░░░░▒▒▒▒▒▒▒▒▒▒██▒▒██▒▒▒▒▒▒▒▒▒▒░░░░░░        ▒▒
                    ▒▒░░    ░░░░░░░░▒▒▒▒▒▒▒▒▒▒████▒▒████▒▒▒▒▒▒▒▒▒▒░░░░░░░░    ░░▒▒
                    ▒▒▒▒░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████▒▒██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒
                    ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██████▓▓██▒▒██████▒▒▓▓██▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
                      ████▒▒▒▒▒▒████▒▒▒▒██████████  ██████████▒▒▒▒████▒▒▒▒▒▒▒▒██
                        ████████████████████████      ████████████████████████
                          ██████████████████              ██████████████████
                              ██████████                      ██████████

As a Lead Front-End Architect with expertise in Angular/React and its latest versions, I am passionate about creating scalable and efficient applications. 🚀 I have extensive experience in big data flow applications, creating architecture, implementing best practices, and leading software teams.

In addition to my work as a developer, I enjoy sharing my knowledge with others through various forms of content creation. 📚 As an interviewer, I have created content like whiteboards, blogs, videos, courses, and webinars. I'm also a TypeScript teacher at Platzi.

I am the creator and mentor of the Gentleman Programming community on YouTube, Twitch, and Discord. Our community is focused on helping developers grow and learn from one another. You can find us at linktr.ee/gentlemanprogramming. 🤝

I have also created two libraries, Gentleman State Manager for Angular and GPX-store agnostic state manager. Both libraries provide developers with agnostic state management solutions for their applications. You can find them on npmjs.com. 📦

As an author, I have published a book called "Cómo ser front-end sin fallar en el intento: Tus primeros pasos en la programación web." The book is available on Amazon. 📖

Thank you for taking the time to visit my profile. I am always looking for new opportunities to collaborate and create content, so please feel free to reach out to me! 🌟
`;
          break;
        }
        case AvailableInformation.SN: {
          result = `YouTube channel:   😊 GentlemanProgramming - <a href="https://www.youtube.com/@GentlemanProgramming" target="_blank">https://www.youtube.com/@GentlemanProgramming</a>
Twitch channel:    🎮 Gentleman_Programming - <a href="https://www.twitch.tv/gentleman_programming/" target="_blank">https://www.twitch.tv/gentleman_programming/</a>
Instagram:         📸 GentlemanProgramming - <a href="https://www.instagram.com/gentlemanprogramming/" target="_blank">https://www.instagram.com/gentlemanprogramming/</a>
Tiktok:            🕺 GentlemanProgramming - <a href="https://www.tiktok.com/@gentlemanprogramming" target="_blank">https://www.tiktok.com/@gentlemanprogramming</a>
Discord:           💬 Gentleman Programming - <a href="https://discord.gg/gentleman-programming-769863833996754944" target="_blank">https://discord.gg/gentleman-programming-769863833996754944</a>
`;
          break;
        }
        case AvailableInformation.WTS: {
          result = `Angular 17:                     🅰️ <a href="https://angular.dev/" target="_blank">https://angular.dev/</a>h
SCSS:                           🎨 <a href="https://develpoer.modizlla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing" target="_blank"> https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing</a>
Signals:                        🚦 <a href="https://angular.dev/guide/signals" target="_blank">https://angular.dev/guide/signals</a>
Gentleman Signals State Manager: 📡 <a href="https://www.npmjs.com/package/gentleman-signals-state-manager" target="_blank">https://www.npmjs.com/package/gentleman-signals-state-manager</a>`;
          break;
        }
        default:
          result = `Command Not Recognized`;
          break;
      }
      return result;
    }
    default:
      return `Command Not Recognized`;
  }
};
