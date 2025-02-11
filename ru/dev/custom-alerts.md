---
order: 2
---

# Свои оповещения

Вы можете отправлять собственные оповещения прямо на сайт, и они будут отображаться как в профиле игрока, так и в разделе оповещений.

![An image](/assets/images/custom-alerts-example.png)

## Пример

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

Получаем оповещение:

![An image](/assets/images/custom-alerts.png)

В фильтрах видно название плагина и название, указанное в `meta`.

![An image](/assets/images/custom-alerts-menu.png)

## Для разработчиков

```csharp
plugins.Find("RustApp")?.Call("RA_CreateAlert", this, message, data, meta);
```

**`string message`** - любая произвольная строка.

Необязательные параметры:

**`object? data`** - любой объект с нужной вам информацией (кол-во символов не более 512), который будет также отображаться на сайте по кнопке `показать данные` (можно так new { foo = "bar" }).\
**`object? meta`** - объект позволяющий настроить отображение оповещения.\
Поля в нем так же не обязательны.

```csharp
class PluginPlayerAlertCustomAlertMeta
{
    string name = ""; // Название для фильтрации
    string custom_icon = null; // Прямая ссылка на изображение
    List<string> custom_links = null; // SteamID игроков, дополнительно к которым привязать оповещение в профиль
}
```

::: warning Обратите внимание
⚠️ Если в `string message` будет содержаться SteamID, он автоматически заменится на ник игрока и предоставит возможность открыть профиль. Например, "оповещение на 76561198111100111" преобразуется в "оповещение на playername".
:::