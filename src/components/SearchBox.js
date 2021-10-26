import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocations,
  getCurrentLocation,
} from "../redux/actions/weatherActions";
import { useDebounce } from "use-lodash-debounce";

const SearchBox = () => {
  const dispatch = useDispatch();

  const locationsReducer = useSelector((state) => state.locationsReducer);
  const { loading, error, locations } = locationsReducer;

  const [keyword, setKeyword] = useState("");
  const [selectedValue, setSelectedValue] = useState([]);
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(keyword, 500);

  useEffect(() => {
    if (keyword !== "") {
      dispatch(getLocations(keyword));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, debounceValue]);

  useEffect(() => {
    if (selectedValue && selectedValue.length > 0) {
      setValue(selectedValue[0]);
      if (value !== "") {
        let filtered = locations?.filter((location) =>
          location.LocalizedName.toLowerCase().includes(value.toLowerCase())
        );
        if (filtered.length > 0) {
          const { Key, LocalizedName } = filtered[0];
          dispatch(getCurrentLocation(Key, LocalizedName));
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue, value]);

  return (
    <Form className=" d-flex mr-sm-2 ml-sm-2 mt-3 justify-content-center">
      <AsyncTypeahead
        id="async-example"
        placeholder="Search location"
        isLoading={loading}
        labelKey="location"
        minLength={1}
        onSearch={(e) => {
          setKeyword(e.replace(/[^A-Za-z]/gi, ""));
        }} //send req only if letters are english
        options={locations?.map((location) => location.LocalizedName)}
        selected={selectedValue}
        onChange={setSelectedValue}
      />
    </Form>
  );
};
export default SearchBox;
