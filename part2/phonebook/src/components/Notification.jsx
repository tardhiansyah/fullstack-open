const Notification = ({message, type}) => {
    const notificationStyle = {
        color: "green",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    };

    switch (type) {
        case "error":
            notificationStyle.color = "red";
            break;
        case "success":
            notificationStyle.color = "green";
            break;
        default:
            break;
    }
    
    if (message == null) {
        return;
    }

    return <div style={notificationStyle}>{message}</div>;
};

export default Notification;