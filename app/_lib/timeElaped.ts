export function getTimeElapsed(timestamp: any) {
  const now: any = new Date();
  const then: any = new Date(timestamp);
  const elapsedMilliseconds: number = now - then;

  if (elapsedMilliseconds < 60000) {
    // Less than a minute
    const seconds = Math.floor(elapsedMilliseconds / 1000);
    return `${seconds}s`;
  } else if (elapsedMilliseconds < 3600000) {
    // Less than an hour
    const minutes = Math.floor(elapsedMilliseconds / 60000);
    return `${minutes}m`;
  } else if (elapsedMilliseconds < 86400000) {
    // Less than a day
    const hours = Math.floor(elapsedMilliseconds / 3600000);
    return `${hours}h`;
  } else if (elapsedMilliseconds < 2592000000) {
    // Less than a month (approximately 30 days)
    const days = Math.floor(elapsedMilliseconds / 86400000);
    return `${days}d`;
  } else {
    // More than a month, approximate months and years
    const months = Math.floor(elapsedMilliseconds / 2592000000);
    const years = Math.floor(months / 12);
    if (years >= 1) {
      return `${years}y`;
    } else {
      return `${months}mo`;
    }
  }
}
