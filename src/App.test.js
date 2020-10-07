import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Exif from './components/Exif'
import Photographer from './components/Photographer'
import {checkExif} from './services/ExifService'

import toJson from "enzyme-to-json";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { isExportDeclaration } from "typescript";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    shallow(<App />);
});

const label="make";
const value="Sony"
  
describe("", () => {
    it("accepts exif props", () => {
        const wrapper = mount(<Exif label={label} value={value} />)
        expect(wrapper.props().label).toEqual(label)
        expect(wrapper.props().value).toEqual(value)
    })
})

const user = {
    name: "Abby Tennisen",
    profile_image: {
        large: 'image-large.com',
        medium: 'image-medium.com',
        small: 'image-small.com',
    },
    username: 'abbyandcamera',
    links: {
        html: 'unsplash.com/abbyandcamera'
    }
}

const downloadURL = 'downloadURL.com'

describe("", () => {
    it("accepts Photographer props", () => {
        const wrapper = mount(<Photographer user={user} downloadURL={downloadURL} />)
        expect(wrapper.props().user).toEqual(user)
    })
})

it("Exif renders correctly", () => {
    const tree = shallow(<Exif label={label} value={value} />);
    expect(toJson(tree)).toMatchSnapshot();
})

it("Photographer renders correctly", () => {
    const tree = shallow(<Photographer user={user} downloadURL={downloadURL} /> )
    expect(toJson(tree)).toMatchSnapshot();
})

describe("Check if Exif exists", () => {
    test("it should return true if none of the keys are null", () => {
        const image = {
            exif: {
                make: "Sony",
                model: "Sony Model 2230",
                aperture: "200"
            }
        }
        expect(checkExif(image)).toEqual(true);
    })
})

describe("Check if Exif exists", () => {
    test("it should return false if any of the keys are null", () => {
        const image = {
            exif: {
                make: "Sony",
                model: null,
                aperture: "200"
            }
        }
        expect(checkExif(image)).toEqual(false);
    })
})