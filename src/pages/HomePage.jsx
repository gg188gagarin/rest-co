import axios from "axios";
import {useState, useEffect} from "react";

import {List} from '../components/List';
import {Card} from '../components/Card';
import {Controls} from "../components/Controls";
import {ALL_COUNTRIES, searchByCountry} from '../config';
import {useNavigate} from 'react-router-dom';


export const HomePage = () => {


    const [countries, setCountries] = useState([]);
    const [fixedCountries, setFixedCountries] = useState([]);

    const navigate = useNavigate();

    console.log(countries);

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({data}) => {
            setCountries(data.slice(0, 10));

        });
    }, []);

    const onSearch = (s) => {
        const path = s ? searchByCountry(s) : ALL_COUNTRIES;

        axios.get(path).then(({data = []}) => {
            if (Array.isArray(data)) {
                setCountries((prev) => {
                    const leftCountries = prev.filter(c => fixedCountries.includes(c.name));
                    const newCountries = data.slice(0, 10).filter(c => !fixedCountries.includes(c.name));
                    return [...leftCountries, ...newCountries]
                });
            } else {
                setCountries((prev) => {
                    return prev.filter(c => fixedCountries.includes(c.name));

                });
            }

        });
    };
    const onSelect = (name) => {
        return (e) => {
            const isChecked = e.target.checked;
            if (isChecked) {
                setFixedCountries([...fixedCountries, name])
            } else {
                setFixedCountries(fixedCountries.filter(n => n !== name))
            }

        }
    };

    return (
        <>
            <Controls onSearch={onSearch}/>
            <List>
                {
                    countries.map(c => {
                            const countryInfo = {
                                img: c.flags.png,
                                name: c.name,
                                onSelect: onSelect(c.name),
                                isSelected: fixedCountries.includes(c.name),
                                info: [
                                    {
                                        title: 'Population',
                                        description: c.population.toLocaleString(),
                                    },

                                    {
                                        title: 'Capital',
                                        description: c.capital,
                                    },
                                ],
                            };
                            return (
                                <Card
                                    key={c.name}
                                    onClick={() => navigate(`/country/${c.name}`)}
                                    {...countryInfo} />
                            );
                        }
                    )
                }
            </List>
        </>
    );
};
