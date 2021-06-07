import "./widgetlg.css";

import React from "react";

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type }>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="./images/me.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Md Alif</span>
          </td>
          <td className="widgetLgDate">20 Jun 2021</td>
          <td className="widgetLgAmount">$2347</td>
          <td className="widgetLgTh">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="./images/me.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Md Alif</span>
          </td>
          <td className="widgetLgDate">20 Jun 2021</td>
          <td className="widgetLgAmount">$2347</td>
          <td className="widgetLgTh">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="./images/me.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Md Alif</span>
          </td>
          <td className="widgetLgDate">20 Jun 2021</td>
          <td className="widgetLgAmount">$2347</td>
          <td className="widgetLgTh">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="./images/me.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Md Alif</span>
          </td>
          <td className="widgetLgDate">20 Jun 2021</td>
          <td className="widgetLgAmount">$2347</td>
          <td className="widgetLgTh">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
