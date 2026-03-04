export function formatMontant(montant) {
  return montant.toLocaleString('de-DE') + ' Ar';
}
export function formatDate(dateIso) {
  const dateObj = new Date(dateIso);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let formatted = new Intl.DateTimeFormat('fr-FR', options).format(dateObj);

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
