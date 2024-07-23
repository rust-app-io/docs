---
order: 4
---

# Рейдблок

В профиле игрока может отображаться статус "рейдблок", который позволяет модераторам понимать, удобно ли сейчас вызывать игрока на проверку

## Список поддерживаемых плагинов
- **NoEscape** - `IsRaidBlocked(BasePlayer player)`
- **RaidZone** - `HasBlock(ulong userId)`
- **RaidBlock #1** - `IsInRaid(BasePlayer player)`
- **RaidBlock #2** - `IsRaidBlocked(BasePlayer player)`

## Поддержка своих плагинов
1. Включить в конфигурации опцию `[Utils] Use own raidblock hooks`
2. Реализовать в своём плагине поддержку хука, на основе ответа `true/false` мы будем отображать информацию в профиле.


```csharp
bool RustApp_IsInRaid(ulong userId) {
  // TODO: Your logic to detect is user raid blocked
}
```