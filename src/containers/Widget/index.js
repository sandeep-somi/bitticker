import React from 'react'
import { useSelector } from 'react-redux'
import { toLocaleString } from '../../utils/common'
import cx from 'classnames'
import IMG from '../../assets/BTC-alt.svg'

export default function Widget() {
  const data = useSelector(state => state.app.data || {})
  const changePercentage = Number(data.DAILY_CHANGE_RELATIVE * 100 || 0).toFixed(2)
  const isPositive = Math.sign(changePercentage) === 1
  const mx = Number(((data.VOLUME || 0) * (data.LAST_PRICE || 0)).toFixed(0))

  return (
    <div className="widget-wrapper">
      <div className="widget">
        <div className="icon">
          <img src={IMG} />
        </div>
        <div className="items">
          <div>
            <h5>BTC</h5>
            <span className="text-16">/</span>
            <h5>USD</h5>
          </div>
          <div>
            <h5>{toLocaleString(data.BID)}</h5>
          </div>
          <div>
            <span>VOL</span>
            <p className="text-underline pl-1 pr-1">{toLocaleString(mx, 0)}</p>
            <span>USD</span>
          </div>
          <div className={cx('daily-change', { success: !!isPositive })}>
            <p>{toLocaleString(data.DAILY_CHANGE)}</p>
            <span className="pl-1 pr-1">{isPositive ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
            <p>({changePercentage}%)</p>
          </div>
          <div>
            <span>LOW</span>
            <p className="pl-1">{toLocaleString(data.LOW)}</p>
          </div>
          <div>
            <span>HIGH</span>
            <p className="pl-1">{toLocaleString(data.HIGH)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}