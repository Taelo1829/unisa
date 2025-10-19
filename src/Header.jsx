import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img
                    src='https://mymodules.dtls.unisa.ac.za/pluginfile.php/1/core_admin/logo/0x200/1760738292/myUnisa-logo.png'
                    alt='unisa image'
                    height={40}
                />
            </div>
           
            <div>
                <div className='profile'>
                    <h2>TS</h2>
                </div>
            </div>
        </div>
    )
}

export default Header