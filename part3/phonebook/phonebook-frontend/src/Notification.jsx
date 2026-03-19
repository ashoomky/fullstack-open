const Notification = ({notification}) => {
    if (notification === null){
        return null
    }
    console.log(notification)

    const notificationStyle = {
        color: notification.type === 'error' ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style = {notificationStyle}>
            {notification.text}
        </div>
    )
}

export default Notification