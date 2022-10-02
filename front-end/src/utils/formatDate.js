function twoDigits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  const convertDate = new Date(date);
  const [day, month, year] = [
    convertDate.getDate(),
    convertDate.getMonth() + 1,
    convertDate.getFullYear(),
  ];
  return `${twoDigits(day)}/${twoDigits(month)}/${year}`;
}

export default formatDate;
