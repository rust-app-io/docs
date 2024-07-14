---
order: 1
---

# Настройка плагина

## Конфигурация плагина
Найти конфиг плагина можно в директории `/oxide/config/RustApp.json`.
```json
{
  "[UI] Chat commands": [
    "report"
  ],
  "[UI] Report reasons": [
    "Cheat",
    "Macros",
    "Abusive"
  ],
  "[UI] Cooldown between reports (seconds)": 300,
  "[UI] Auto-parse reports from F7 (ingame reports)": true,
  "[UI • Starter Plan] Show 'recently checked' checkbox (amount of days)": 7,
  "[Chat] SteamID for message avatar (default account contains RustApp logo)": "76561198134964268",
  "[Check] Command to send contact": "contact",
  // В случае если кого-то забанят через сайт, в чат будет отправлено оповещение об этом // [!code highlight]
  "[Ban] Enable broadcast server bans": true,
  // Если вас пугает выполнение команд через сайт - выключите этот параметр // [!code highlight]
  // тогда это станет абсолютно невозможно // [!code highlight]
  "[Custom Actions] Allow custom actions": true // [!code highlight]
}
```

## Как работает задержка отправки репортов?
Вы можете настроить задержку в секундах, перед тем как игрок сможет отправить следующую жалобу.

`"[UI] Cooldown between reports (seconds)": 60` - установит задержку в 60 секунд.

::: warning Имейте в виду
Задержка накладывается на игрока, отправившего жалобу, и не позволяет ему отправлять другие жалобы в течение указанного времени. По истечении этого времени игрок сможет отправить жалобу на любого игрока, даже на того, на кого уже жаловался.

Задержка не действует на репорты отправленные через F7!
:::

## Локализация
Кроме основных настроек плагина, можно настроить и языковые файлы, отвечающие за текст в сообщениях чата или интерфейсе жалоб. Языковые файлы находятся в директории `/oxide/lang/ru (или en)/RustApp.json`.

::: code-group

```json [RU локализация]
{
  "Header.Find": "НАЙТИ ИГРОКА",
  "Header.SubDefault": "На кого вы хотите пожаловаться?",
  "Header.SubFindResults": "Вот игроки, которых мы нашли",
  "Header.SubFindEmpty": "Игроки не найдены",
  "Header.Search": "Поиск",
  "Header.Search.Placeholder": "Введите ник/steamid",
  "Subject.Head": "Выберите причину репорта",
  "Subject.SubHead": "На игрока %PLAYER%",
  "Cooldown": "Подожди %TIME% сек.",
  "Sent": "Жалоба успешно отправлена",
  "Contact.Error": "Вы не отправили свой Discord",
  "Contact.Sent": "Вы отправили:",
  "Contact.SentWait": "<size=12>Если вы отправили корректный дискорд - ждите заявку в друзья.</size>",
  "Check.Text": "<color=#c6bdb4><size=32><b>ВЫ ВЫЗВАНЫ НА ПРОВЕРКУ</b></size></color>\n<color=#958D85>У вас есть <color=#c6bdb4><b>3 минуты</b></color> чтобы отправить дискорд и принять заявку в друзья.\nИспользуйте команду <b><color=#c6bdb4>/contact</color></b> чтобы отправить дискорд.\n\nДля связи с модератором - используйте чат, а не команду.</color>",
  "Chat.Direct.Toast": "Получено сообщение от админа, посмотрите в чат!",
  "UI.CheckMark": "Проверен",
  "Paid.Announce.Clean": "Ваша жалоба на \"%SUSPECT_NAME%\" была проверена!\n<size=12><color=#81C5F480>В результате проверки, нарушений не обнаружено</color></size>",
  "Paid.Announce.Ban": "Ваша жалоба на \"%SUSPECT_NAME%\" была проверена!\n<color=#F7D4D080><size=12>Игрок заблокирован, причина: %REASON%</size></color>",
  "System.Chat.Direct": "<size=12><color=#ffffffB3>ЛС от Администратора</color></size>\n<color=#AAFF55>%CLIENT_TAG%</color>: %MSG%",
  "System.Chat.Global": "<size=12><color=#ffffffB3>Сообщение от Администратора</color></size>\n<color=#AAFF55>%CLIENT_TAG%</color>: %MSG%",
  "System.Ban.Broadcast": "Игрок <color=#55AAFF>%TARGET%</color> <color=#bdbdbd></color>был заблокирован.\n<size=12>- причина: <color=#d3d3d3>%REASON%</color></size>",
  "System.Ban.Temp.Kick": "Вы забанены на этом сервере до %TIME% МСК, причина: %REASON%",
  "System.Ban.Perm.Kick": "Вы навсегда забанены на этом сервере, причина: %REASON%",
  "System.Ban.Ip.Kick": "Вам ограничен вход на сервер!",
  "System.BanSync.Temp.Kick": "Обнаружена блокировка на другом проекте до %TIME% МСК, причина: %REASON%",
  "System.BanSync.Perm.Kick": "Обнаружена блокировка на другом проекте, причина: %REASON%"
}
```

```json [EN локализация]
{
  "Header.Find": "FIND PLAYER",
  "Header.SubDefault": "Who do you want to report?",
  "Header.SubFindResults": "Here are players, which we found",
  "Header.SubFindEmpty": "No players was found",
  "Header.Search": "Search",
  "Header.Search.Placeholder": "Enter nickname/steamid",
  "Subject.Head": "Select the reason for the report",
  "Subject.SubHead": "For player %PLAYER%",
  "Cooldown": "Wait %TIME% sec.",
  "Sent": "Report succesful sent",
  "Contact.Error": "You did not sent your Discord",
  "Contact.Sent": "You sent:",
  "Contact.SentWait": "If you sent the correct discord - wait for a friend request.",
  "Check.Text": "<color=#c6bdb4><size=32><b>YOU ARE SUMMONED FOR A CHECK-UP</b></size></color>\n<color=#958D85>You have <color=#c6bdb4><b>3 minutes</b></color> to send discord and accept the friend request.\nUse the <b><color=#c6bdb4>/contact</color></b> command to send discord.\n\nTo contact a moderator - use chat, not a command.</color>",
  "Chat.Direct.Toast": "Received a message from admin, look at the chat!",
  "UI.CheckMark": "Checked",
  "Paid.Announce.Clean": "Your complaint about \"%SUSPECT_NAME%\" has been checked!\n<size=12><color=#81C5F480>As a result of the check, no violations were found</color ></size>",
  "Paid.Announce.Ban": "Your complaint about \"%SUSPECT_NAME%\" has been verified!\n<color=#F7D4D080><size=12>Player banned, reason: %REASON%</ size></color>",
  "System.Chat.Direct": "<size=12><color=#ffffffB3>DM from Administration</color></size>\n<color=#AAFF55>%CLIENT_TAG%</color>: %MSG%",
  "System.Chat.Global": "<size=12><color=#ffffffB3>Message from Administration</color></size>\n<color=#AAFF55>%CLIENT_TAG%</color>: %MSG%",
  "System.Ban.Broadcast": "Player <color=#55AAFF>%TARGET%</color> <color=#bdbdbd></color>was banned.\n<size=12>- reason: <color=#d3d3d3>%REASON%</color></size>",
  "System.Ban.Temp.Kick": "You are banned until %TIME% МСК, reason: %REASON%",
  "System.Ban.Perm.Kick": "You have perm ban, reason: %REASON%",
  "System.Ban.Ip.Kick": "You are restricted from entering the server!",
  "System.BanSync.Temp.Kick": "Detected ban on another project until %TIME% МСК, reason: %REASON%",
  "System.BanSync.Perm.Kick": "Detected ban on another project, reason: %REASON%"
}
```

:::