---
order: 5
---

# API плагина

## Методы

### RA_CreateAlert

Отправляет оповещение в раздел `Оповещения`.

```csharp
void RA_CreateAlert(Plugin plugin, string message, object data = null, object meta = null)
```

Пример использования:

```csharp
string message = $"Игрок {attaker.UserIDString} странно стреляет"; // attaker.UserIDString превратиться в кнопку перехода в профиль `Cheater`

object meta = new 
{
    name = "AIM Detect",
    custom_icon = "https://i.ibb.co/qHVY2FX/poggit-icon.png", 
    custom_links = new List<string> 
    { 
        target.UserIDString // Игрок, в которого стреляют, у него в профиле тоже будет это оповещение
    },
};

object data = new 
{
    attaker = new 
    {
        steamid = attaker.UserIDString,
        nickname = attaker.displayName,
        position = attaker.transform.position.ToString(),
    },
    target = new 
    {
        steamid = target.UserIDString,
        nickname = target.displayName,
        position = target.transform.position.ToString(),
    },
};

plugins.Find("RustApp")?.Call("RA_CreateAlert", this, message, data, meta);
```

### RA_BanPlayer

Блокирует игрока.

```csharp
void RA_BanPlayer(string steam_id, string reason, string duration, bool global, bool ban_ip, string comment = "")
```

Пример использования:

```csharp
plugins.Find("RustApp")?.Call("RA_BanPlayer", attaker.UserIDString, "Читер", "0", true, true, "AIM" /*Не обязательно*/);
```

### RA_ReportSend

Отправляет жалобу на игрока.

```csharp
void RA_ReportSend(string initiator_steam_id, string target_steam_id, string reason, string message = "")
```

Пример использования:

```csharp
plugins.Find("RustApp")?.Call("RA_ReportSend", initiator.UserIDString, target.UserIDString, reason, message /*Не обязательно*/);
```

### RA_DirectMessageHandler

Сохраняет сообщение игрока и отображает в разделе `Чаты`.

```csharp
void RA_DirectMessageHandler(string from_steam_id, string to_steam_id, string message)
```

Пример использования:

```csharp
plugins.Find("RustApp")?.Call("RA_DirectMessageHandler", sender.UserIDString, recipient.UserIDString, message);
```

## Хуки

### RustApp_CanIgnoreBan

Вызывается перед проверкой на блокировки.\
Если вернуть не `null`, игрок не заблокируется.

```csharp
object RustApp_CanIgnoreBan(string steam_id)
{
    if (steam_id == "76560000000000000")
    {
        return false;
    }

    return null;
}
```

### RustApp_CheckNoticeState

Вызывается при показе/cкрытии таблички о проверке игроку.\
`value == true` - Табличка показана.\
`value == false` - Табличка скрыта.

```csharp
void RustApp_CheckNoticeState(string steam_id, bool value)
{
    if (value)
    {
        rust.RunServerCommand($"freeze {steam_id}");
    }
    else
    {
        rust.RunServerCommand($"unfreeze {steam_id}");
    }
}
```

### RustApp_OnPaidAnnounceBan

Вызывается при блокировке игрока.\
`List<string> reporters` — список SteamID игроков, которые жаловались на этого игрока.

```csharp
void RustApp_OnPaidAnnounceBan(string steam_id, List<string> reporters, string reason) 
{
    if (reporters == null || reporters.Count <= 0) return;

    foreach (string reporter_steam_id in reporters)
    {
        BasePlayer player = BasePlayer.FindByID(ulong.Parse(reporter_steam_id));
        player.SendMessage("Игрок на которого вы жаловались, был забанен, вы получили компенсацию в инвентарь.");

        Item item = ItemManager.CreateByName("metal.refined", 50, 0);
        if (item != null)
            player.GiveItem(item);
    }
}
```

### RustApp_OnPaidAnnounceClean

Вызывается при вердикте проверки `Нарушений нет`.\
`List<string> reporters` — список SteamID игроков, которые жаловались на этого игрока.

```csharp
void RustApp_OnPaidAnnounceClean(string steam_id, List<string> reporters) 
{
    BasePlayer player = BasePlayer.FindByID(ulong.Parse(steam_id));
    player.SendMessage("Спасибо что прошли проверку, возмещение за потраченное время в инвентаре.");
    Item item = ItemManager.CreateByName("scrap", 50, 0);
    player.GiveItem(item);
}
```