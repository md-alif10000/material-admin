import './featuredinfo.css'
import React from 'react'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$23543</span>
            <span className="featuredMoneyRate">
              -$356 <ArrowDownward className="featuredIcon" />{" "}
            </span>
          </div>
          <span className="featuredSub">Compared to last month </span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$23543</span>
            <span className="featuredMoneyRate">
              -$356 <ArrowDownward className="featuredIcon negative" />{" "}
            </span>
          </div>
          <span className="featuredSub">Compared to last month </span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$23543</span>
            <span className="featuredMoneyRate">
              -$356 <ArrowDownward className="featuredIcon negative" />{" "}
            </span>
          </div>
          <span className="featuredSub">Compared to last month </span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Const</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$23543</span>
            <span className="featuredMoneyRate">
              +$35 <ArrowUpward className="featuredIcon" />{" "}
            </span>
          </div>
          <span className="featuredSub">Compared to last month </span>
        </div>
      </div>
    );
}
