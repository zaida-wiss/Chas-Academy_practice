export function getAxiosErrorMessage(error) {
  if (error.response) {

    //servern svarade med felstatus
    return `Serverfel: ${error.response.status} ${error.response.statusText}`;

  } else if (error.request) {
    // Ingen respons från servern
    return "Ingen respons från servern";
  } else {
    //Något annat fel
    return `Fel: ${error.message}`;
  }
  }
