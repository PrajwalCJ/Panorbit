
// To view user details in the home paage
const ProfileDetailItem = ({ keyName, keyValue }) => {

    const outterdiv = { width: '100%', display: 'flex', padding: '5px 0' }
    const innerDiv = { display: 'flex', width: '40%', justifyContent: 'end' }
    const outterSpan = { paddingLeft: '1em', width: '60%', textAlign: 'left' }

    return (
        <div style={outterdiv}>
            <div style={innerDiv}>
                <span style={{ paddingRight: '1em' }} >{keyName}</span>
                <span>:</span>
            </div>
            <span style={outterSpan}>{keyValue}</span>
        </div>
    )
}

export default ProfileDetailItem;