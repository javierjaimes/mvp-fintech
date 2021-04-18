const API = {
  crm: 'https://607a85e9bd56a60017ba2bb8.mockapi.io/api/v1/crmpipeline',
  nrs: 'https://607a85e9bd56a60017ba2bb8.mockapi.io/api/v1/nrs',
  jrs: 'https://607a85e9bd56a60017ba2bb8.mockapi.io/api/v1/jrs'
}

// Retrieve data function
const retrieveData = (url) => {
  const data = fetch(url)
  .then(response => response.json())
  .then(data => data)

  return data;
}

// Get crm data from company database
const getCompanyList = () => {
  return retrieveData(API.crm)
}

// encapsulated methods
const MVP = {
  getList: getCompanyList
}

export default MVP;