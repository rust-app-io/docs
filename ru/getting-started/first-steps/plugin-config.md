---
order: 1
---

# Настройка плагина

## Где настроить плагин?
Конфигурация плагина находится в `/oxide/config/RustApp.json`
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

`"[UI] Cooldown between reports (seconds)": 60` - установит задержку в 60 секунд

::: warning 
Задержка накладывается на игрока, отправившего жалобу, и не позволяет ему отправлять другие жалобы в течение указанного времени. По истечении этого времени игрок сможет отправить жалобу на любого игрока, даже на того, на кого уже жаловался.
:::