'use client'

import { Dropdown, MenuItem } from '@skbkontur/react-ui';

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Dropdown
        size='large'
        caption='Caption'
      >
        <MenuItem>
          Buy
        </MenuItem>
        <MenuItem>
          Rent
        </MenuItem>
        <MenuItem>
          Sell
        </MenuItem>
      </Dropdown>
    </main>
  )
}
