import React from 'react'
import { Menu,Dropdown,Image } from 'semantic-ui-react'

export default function Signedin(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--920x613.jpg"/>
                <Dropdown pointing="top left" text="Dwayne">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>

                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

        </div>
    )
}
