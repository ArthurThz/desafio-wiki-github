import { Column, Container, UserIcon, Row } from "./styles";

const UserInfo = ({flex, userName, bio, avatarPath}) => {
    return ( 
        <Container>
            <Column flex={1} >
                <UserIcon>
                    <img src={avatarPath} />
                </UserIcon>
            </Column>
            <Column flex={3}>
                <Row>
                    <h1>{userName}</h1>
                </Row>
                <Row>
                    <p>{bio}</p>
                </Row>
            </Column>
        </Container>
     );
}
 
export default UserInfo;