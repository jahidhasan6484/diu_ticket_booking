import React, { useState } from 'react';
import Options from './Options';
import './Search.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    const [fromData, setFromData] = useState({
        selectedName: "",
        selectedType: "",
        showSearch: false,
    });

    const handleChange = (e) => {
        const searchName = e.target.name;
        const searchType = e.target.value;
        if (searchType === "departure") {
            setTo(false);
            setFrom(true);
        }
        else if (searchType === "return") {
            setTo(true);
            setFrom(false);
        };

        setFromData({
            ...fromData,
            selectedName: searchName,
            selectedType: searchType,
            showSearch: true,
        })
    }

    const [from, setFrom] = useState(false);

    const [to, setTo] = useState(false);

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="search">
            <form>
                <div class="nav-scroller py-1 mb-2">
                    <nav class="nav">
                        <div className="search__type">
                            <label>Departure</label>
                            <input type="radio" name="search_type" value="departure" onChange={handleChange} ></input>
                        </div>
                        <div className="search__type">
                            <input type="radio" name="search_type" value="return" onChange={handleChange} ></input>
                            <label>Return</label>
                        </div>
                    </nav>
                </div>

            </form>
            {
                fromData.showSearch &&
                <form class="row row-cols-lg-auto g-3 align-items-center">
                    <div class="col-12 search__input">
                        <label for="from">from: </label>
                        {
                            to ? <select name="from" id="from">
                                <option value="Daffodil Smart City">Daffodil Smart City</option>
                            </select> : <select name="from" id="from">
                                <Options />
                            </select>
                        }
                    </div>

                    <div class="col-12 search__input">
                        <label for="to">to: </label>
                        {
                            from ? <select name="to" id="to">
                                <option value="Daffodil Smart City">Daffodil Smart City</option>
                            </select> : <select name="to" id="to">
                                <Options />
                            </select>
                        }
                    </div>

                    <div class="col-12 search__input">
                        <label for="date">date: </label>
                        <DatePicker className="date_picker"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showWeekNumbers
                            dateFormat="MMMM d, yyyy"
                            placeholderText="June 11, 2019"
                        />
                    </div>

                    <div class="col-12 search__input">
                        <p className="button"><FaSearch className="search__icon" size="20" /> <span className="search_text">Search</span></p>
                    </div>
                </form>
            }
        </div>
    );
};

export default Search;