# SpookyBot
🎃 *A spooky Discord bot*

[![release](https://img.shields.io/github/release/LucasCtrl/SpookyBot.svg?style=flat-square&logo=github&logoColor=fafafa&colorA=191b25&colorB=32cb8b)](https://github.com/LucasCtrl/SpookyBot/releases/latest)
[![issues](https://img.shields.io/github/issues/LucasCtrl/SpookyBot.svg?style=flat-square&colorA=191b25)](https://github.com/LucasCtrl/SpookyBot/issues)
[![stars](https://img.shields.io/github/stars/LucasCtrl/SpookyBot.svg?style=flat-square&colorA=191b25)](https://github.com/LucasCtrl/SpookyBot/stargazers)
[![forks](https://img.shields.io/github/forks/LucasCtrl/SpookyBot.svg?style=flat-square&colorA=191b25)](https://github.com/LucasCtrl/SpookyBot/network)

This project is convenient for people who want to get into open source and contribute to different projects especially during the Hacktoberfest.

*Don't hesitate to ask me for help on my [Discord server](https://discord.gg/nEDcagb), I would help you with great pleasure!*

## 🤖 Add the bot on your server

You just need to click on [this link](https://discord.com/oauth2/authorize?client_id=761568927188123669&scope=bot&permissions=380108139840) and validate the form without changing any permission.

## 🌐 Adding a language

You can add languages to the robot so that it is translated and accessible to everyone!
[Follow the dedicated wiki page](https://github.com/LucasCtrl/SpookyBot/wiki/i18n).

<!-- ## 💻 Testing locally
1. Create a bot [on the Discord developer portal](https://discord.com/developers/applications),
2. Create a webhook on your own discord server [by following this tutorial](https://docs.gitlab.com/ee/user/project/integrations/discord_notifications.html),
3. Copy the `./app/config/config.example.json` from the project to `./app/config/config.json` and fill in the gaps with the information from the bot and the webhook. The first token is on the bot page accessed from the side of the Discord Developer Portal, and the webook information is found on the page when you navigate to the webhook url,
4. Invite your dev bot to your server by [following this url](https://discord.com/oauth2/authorize?client_id=761568927188123669&scope=bot&permissions=1141124160), replacing the client id with your bot's client id (found on it's general information page), and the permissions with the Permission Integer created in the Developer Portal as you select permissions for your bot,
5. Once these steps are setup, simply run `make startup_dev` from the terminal in the root directory of the repo,
5.1 If you want to install node modules you could just add it into your local package.json and run the `make build_dev_image` after that you need to recreate the container.
6. Test the bot is connected by running `<your-prefix>help` to get a list of commands, and then initialize the DB by running `<your-prefix>emitgc`. It should then respond with "Join <your-server> with <#> users,
7. Test that the bot reacts to comments by typing one of the words in `lang/<your-lang>.js`. The bot should respond with an emoji! -->
<!--
### Docker

To run the bot inside a docker container, make sure to create the .env
file and then run the following:

```bash
docker build . -t spooky-bot --no-cache
docker run --name spooky-bot --env-file .env --rm -d spooky-bot
```

Or with `docker compose up` -->

## 👤 Author

**LucasAlt**
* Website: https://www.lucasalt.fr
* Twitter: [@LucasCtrlAlt](https://twitter.com/LucasCtrlAlt)
* GitHub: [@LucasCtrl](https://github.com/LucasCtrl)

## 🙏 Thanks
* [**@AntoniosBarotsis**](https://github.com/AntoniosBarotsis) - Docker integration
<!--
* [**@marc2332**](https://github.com/marc2332) - Translation (es, ca)
* [**@tmetten**](https://github.com/tmetten) - Translation (nl)
* [**@dragonDScript**](https://github.com/dragonDScript) - Translation (ca)
* [**@Pervolarakis**](https://github.com/Pervolarakis) - Translation (gr)
* [And many more!](https://github.com/LucasCtrl/SpookyBot/graphs/contributors) -->

## 🤝 Contributing

Before contributing to this project, make sure you have read the [contribution guidelines](https://github.com/LucasCtrl/SpookyBot/blob/main/CONTRIBUTING.md)!

1. Fork it (https://github.com/LucasCtrl/SpookyBot/fork)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Show your support

- Give a ⭐️ if you like this project!
- Upvote for the bot

<a href="https://discordbotlist.com/bots/761568927188123669"><img src="https://discordbotlist.com/api/v1/bots/761568927188123669/widget"></a>

<a href="https://www.buymeacoffee.com/lucasalt"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=lucasalt&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"></a>

## 📝 License

This project is open source and available under the [MIT](https://github.com/LucasCtrl/SpookyBot/blob/master/LICENSE.md)
