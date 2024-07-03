---
order: 2
---

# Свои оповещения

Вы можете отправлять собственные оповещения прямо на сайт, и они будут отображаться как в профиле игрока, так и в разделе оповещений.

![An image](/assets/images/custom-alerts.png)

## Пример

```c#
plugins.Find("RustApp").Call("RA_CreateAlert", this, "Привет от 76561198121100397", new {
  test_payload = Performance.current.frameRate,
}, new {
  custom_icon = "https://www.rustedit.io/images/imagelibrary/human-skull.png",
});
```

Получаем оповещение:

![An image](/assets/images/custom-alerts-example.png)

## Для разработчиков

```c#
plugins.Find("RustApp")?.Call("RA_CreateAlert", Plugin original, string message, object? data, object? meta)
```

**`string message`** - любая произвольная строка\
**`object? data`** - любой объект с нужной вам информацией (кол-во символов не более 512), который будет также отображаться на сайте по кнопке `показать данные` (можно так new { foo = "bar" })\
**`object? meta`** - объект позволяющий настроить отображение оповещения

```c#
interface CustomAlertMeta {
    // Любая ссылка с картинкой
    string custom_icon = null;
    // Название, для возможности фильтрации
    string name = ""; 
    // Список SteamID игроков к которым должен быть привязан алерт. По умолчанию те, чьи ID указаны в сообщении
    List<string> custom_links = null;
}
```

::: warning Обратите внимание
⚠️ Если в `string message` будет содержаться SteamID, он автоматически заменится на имя игрока и предоставит возможность открыть профиль. Например, "оповещение на 76561198111100111" преобразуется в "оповещение на playername".
:::