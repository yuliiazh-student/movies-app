import useStorage from "../../hooks/useStorage"

export default function Account() {
  const {get} = useStorage('local')
  const account = get('account')
  return (<>
    <h1>Hello, {account.name || account.username}!</h1>
    <dl className="account-data">
      <dt>Language:</dt>
      <dd>{account.iso_3166_1}</dd>
      <dt>Show adult result:</dt>
      <dd>{account.include_adult ? 'Yes' : 'No'}</dd>
    </dl>
  </>)
}