---
order: 5
---

# API плагина

## Методы

### RA_BanPlayer
Блокирует игрока

```csharp
void RA_BanPlayer(string steam_id, string reason, string duration, bool global, bool ban_ip, string comment = "")
```

### RA_DirectMessageHandler
Сохраняет сообщение игрока

```csharp
void RA_DirectMessageHandler(string from, string to, string message)
```

### RA_ReportSend
Отправляет жалобу на игрока

```csharp
void RA_ReportSend(string initiator_steam_id, string target_steam_id, string reason, string message = "")
```

## Хуки

### RustApp_CanIgnoreCheck
Вызывается перед отображением уведомления о проверке.\
Если вернуть не `null`, табличка показана не будет.
```csharp
object RustApp_CanIgnoreCheck(BasePlayer player) {
  // Вас нельзя вызвать на проверку
  if (player.UserIDString == "%ВашSteamID64") {
    return false;
  }

  return null;
}
```
### RustApp_CanIgnoreReport
Вызывается перед отправкой жалобы.\
Если вернуть не `null`, жалоба отправлена не будет.
```c#
object RustApp_CanIgnoreReport(string target_steam_id, string initiator_steam_id) {
  // На вас никогда не будут приходить репорты
  if (target_steam_id == "%ВашSteamID64") {
    return false;
  }

  return null;
}
```
### RustApp_CanIgnoreBan
Вызывается перед проверкой на блокировки.\
Если вернуть не `null`, блокировки проверены не будут.
```c#
object RustApp_CanIgnoreBan(string steam_id) {
  // Даже если вы заблокируете себя, вас пустит на сервер
  if (target_steam_id == "%ВашSteamID64") {
    return false;
  }

  return null;
}
```
### RustApp_CanOpenReportUI
Вызывается перед открытием интерфейса жалоб.\
Если вернуть не `null`, интерфейс открыт не будет.
```c#
object RustApp_CanOpenReportUI(BasePlayer player) {
  // OpenMyOwnReportSystemUI(player);
  // Вместо нашего UI будет открыто ваше

  return false;
}
```

### RustApp_OnCheckNoticeShowed
Табличка о вызове на проверку показана.
```c#
void RustApp_OnCheckNoticeShowed(BasePlayer player) {
  Server.Broadcast($"{player.displayName} был вызван на проверку!");
}
```
### RustApp_OnCheckNoticeHidden
Табличка о вызове на проверку скрыта.
```c#
void RustApp_OnCheckNoticeHidden(BasePlayer player) {
  Server.Broadcast($"Проверка игрока {player.displayName} завершена!");
}
```
### RustApp_OnPaidAnnounceBan
Игрок был заблокирован.\
`List<string> initiators` — список игроков, которые жаловались на этого игрока.
```c#
void RustApp_OnPaidAnnounceBan(BasePlayer player, string steam_id, List<string> initiators) {
  Server.Broadcast($"Игрок {player.displayName} заблокирован! На него было {initiators.Count} жалоб!");
}
```
### RustApp_OnPaidAnnounceClean
Игрок был проверен, и нарушений не обнаружено.\
`List<string> initiators` — список игроков, которые жаловались на этого игрока.
```c#
void RustApp_OnPaidAnnounceClean(BasePlayer player, string steam_id, List<string> initiators) {
  Server.Broadcast($"Игрок {player.displayName} проверен, нарушений необнаружено! На него было {initiators.Count} жалоб!");
}
```

<br>

::: warning Ограничения тарифа
Некоторые события могут быть недоступны из-за вашего тарифного плана. Например, события **RustApp_OnPaidAnnounceBan** и **RustApp_OnPaidAnnounceClean** доступны только для тарифного плана `Starter`, на плане `Free` они не будут работать.
:::
