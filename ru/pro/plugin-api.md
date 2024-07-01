---
order: 5
---

# API плагина

## Хуки

### RustApp_CanIgnoreCheck
Вызывается перед отображением уведомления о проверке.\
Если вернуть не `null`, табличка показана не будет.
```csharp
object RustApp_CanIgnoreCheck(BasePlayer player)
```
### RustApp_CanIgnoreReport
Вызывается перед отправкой жалобы.\
Если вернуть не `null`, жалоба отправлена не будет.
```c#
object RustApp_CanIgnoreReport(string target_steam_id, string initiator_steam_id)
```
### RustApp_CanIgnoreBan
Вызывается перед проверкой на блокировки.\
Если вернуть не `null`, блокировки проверены не будут.
```c#
object RustApp_CanIgnoreBan(string steam_id)
```
### RustApp_CanOpenReportUI
Вызывается перед открытием интерфейса жалоб.\
Если вернуть не `null`, интерфейс открыт не будет.
```c#
object RustApp_CanOpenReportUI(BasePlayer player)
```

## События

### RustApp_OnCheckNoticeShowed
Табличка о вызове на проверку показана.
```c#
RustApp_OnCheckNoticeShowed(BasePlayer player)
```
### RustApp_OnCheckNoticeHidden
Табличка о вызове на проверку скрыта.
```c#
RustApp_OnCheckNoticeHidden(BasePlayer player)
```
### RustApp_OnPaidAnnounceBan
Игрок был заблокирован.\
`List<string> initiators` — список игроков, которые жаловались на этого игрока.
```c#
RustApp_OnPaidAnnounceBan(BasePlayer player, string steam_id, List<string> initiators)
```
### RustApp_OnPaidAnnounceClean
Игрок был проверен, и нарушений не обнаружено.\
`List<string> initiators` — список игроков, которые жаловались на этого игрока.
```c#
RustApp_OnPaidAnnounceClean(BasePlayer player, string steam_id, List<string> initiators)
```

::: warning Ограничения тарифа
Некоторые события могут быть недоступны из-за вашего тарифного плана. Например, события **RustApp_OnPaidAnnounceBan** и **RustApp_OnPaidAnnounceClean** доступны только для тарифного плана `Starter`, на плане `Free` они не будут работать.
:::