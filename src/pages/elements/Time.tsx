const monthMap: Record<string, string> = {
  Jan: 'January',
  Feb: 'February',
  Mar: 'March',
  Apr: 'April',
  May: 'May',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December',
}

const convertFromDateStringToDate = (dateString: string) => {
  // Split the date string into month and year
  const [rawMonth, year] = dateString.split(' ')

  const month = rawMonth.length === 3 ? monthMap[rawMonth] : rawMonth

  const dateObj = new Date(Date.parse(month + ' 1, ' + year))

  const formattedDate = dateObj.toISOString().split('T')[0].substr(0, 7)

  return formattedDate
}

const Time = ({ date }: { date: string }) => {
  if (date.includes(' - ')) {
    let [rawFromDate, rawToDate] = date.split(' - ')

    const options = { month: 'long', year: 'numeric' } as any

    const fromDate =
      rawFromDate === 'Present'
        ? new Date().toLocaleString('en-US', options)
        : rawFromDate
    const toDate =
      rawToDate === 'Present'
        ? new Date().toLocaleString('en-US', options)
        : rawToDate

    return (
      <time
        dateTime={`${convertFromDateStringToDate(
          fromDate,
        )}/${convertFromDateStringToDate(toDate)}`}
      >
        {rawFromDate} &ndash; {rawToDate}
      </time>
    )
  } else {
    return <time dateTime={convertFromDateStringToDate(date)}>{date}</time>
  }
}

export default Time
