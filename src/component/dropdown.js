import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [dropdownName, setDropdownName] = useState('All');
    const [dropdownName2, setDropdownName2] = useState('All');
    const [dropdownName3, setDropdownName3] = useState('All');
    const [dropdownIsi1, setDropdownIsi1] = useState([]);
    const [dropdownIsi3, setDropdownIsi2] = useState([]);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);

    const bunga = () => {
        setDropdownName("Bunga")
        setDropdownName2("Mawar")
        setDropdownIsi1(['Mawar', 'Melati'])
    }

    const hewan = () => {
        setDropdownName("Hewan")
        setDropdownName2("Kucing")
        setDropdownIsi1(['Kucing', 'Anjing'])
    }
    const mawar = () => {
        setDropdownName2("Mawar")
        setDropdownName3("Mawar Biru")
        setDropdownIsi2(['Mawar biru', 'Mawar merah'])
    }
    const melati = () => {
        setDropdownName2("Melati")
        setDropdownName3("Melati biru")
        setDropdownIsi2(['Melati biru', 'Melati merah'])
    }
    const merah = () => {
        setDropdownName3("Biru")
        setDropdownIsi2(['Mawar biru', 'Mawar merah'])
    }
    const biru = () => {
        setDropdownName3("Merah")
        setDropdownIsi2(['Melati biru', 'Melati merah'])
    }

    return (
        <div>
            <p>Choose</p>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {dropdownName}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={bunga}>Bunga</DropdownItem>
                    <DropdownItem onClick={hewan}>Hewan</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <p>Type</p>
            <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                <DropdownToggle caret>
                    {dropdownName2}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={mawar}>{dropdownIsi1[0]}</DropdownItem>
                    <DropdownItem onClick={melati}>{dropdownIsi1[1]}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <p>Title</p>
            <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                <DropdownToggle caret>
                    {dropdownName3}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={merah}>{dropdownIsi3[0]}</DropdownItem>
                    <DropdownItem onClick={biru}>{dropdownIsi3[1]}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}


export default Example;