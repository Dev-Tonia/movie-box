import React from "react";
import logoBlack from "../icons/Logo-black.png";
import Home from "../icons/Home.png";
import MovieProjector from "../icons/Movie Projector.png";
import TvShow from "../icons/TV Show.png";
import Calendar from "../icons/Calendar.png";
import Logout from "../icons/Logout.png";

function MenuBar() {
  return (
    <div className="nav-region">
      <nav>
        <section>
          <img className="nav-logo" src={logoBlack} alt="Movie Logo Black" />
        </section>
        <ul>
          <li>
            <div>
              <img className="nav-icons" src={Home} alt="Home Icon" />
            </div>
            <p className="nav-name">Home</p>
          </li>
          <li className="active">
            <div>
              <img
                className="nav-icons"
                src={MovieProjector}
                alt="MovieProjector Icon"
              />
            </div>
            <p className="nav-name ">Movies</p>
          </li>
          <li>
            <div>
              <img className="nav-icons" src={TvShow} alt="TvShow Icon" />
            </div>
            <p className="nav-name">TV Series</p>
          </li>
          <li>
            <div>
              <img className="nav-icons" src={Calendar} alt="Calendar Icon" />
            </div>
            <p className="nav-name">Upcoming</p>
          </li>
          <div className="nav-cta-cnt">
            <div className="nav-cta-des-cnt">
              <p className="des-one">Play movie quizes and earn free tickets</p>
              <p className="des-two">50k people are playing now</p>
            </div>

            <div className="nav-cta-btn-cnt">
              <button className="nav-cta-btn">Start playing</button>
            </div>
          </div>
          <li>
            <div>
              <img className="nav-icons" src={Logout} alt="LogoutIcon" />
            </div>
            <p className="nav-name">Log out</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBar;
