import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
   return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId = '125d183f-fe3f-41ad-b2cf-808412e35ae4'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
        />
    </div>
   )
    
}
export default ChatsPage //npm i react-chat-engine-pretty