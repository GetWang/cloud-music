import React from "react";

import "./SongListCategory.scss";
import SvgIcon from "../SvgIcon/SvgIcon";
import { getSongListCategorys } from "../../api/songList";
import { OK_CODE } from "../../api/common";

const ALL_CATEGORY = "全部";
const RECOM_CATEGORY = "推荐歌单";
const BASE_CATEGORY_LIST = ["全部", RECOM_CATEGORY];

export default class SongListCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currCateName: ALL_CATEGORY,
      showList: BASE_CATEGORY_LIST.slice(),
      categorys: [],
      isCatesExpand: false,
    };
  }

  componentDidMount() {
    this.getCategorys();
  }

  getCategorys() {
    getSongListCategorys()
      .then((res) => {
        console.log("api-getSongListCategorys res", res);
        if (res.code === OK_CODE) {
          this.handleCategorys(res);
        }
      })
      .catch((e) => {
        console.log("api-getSongListCategorys error", e);
      });
  }
  handleCategorys(data) {
    let obj = {};
    let showList = BASE_CATEGORY_LIST.slice();
    let cates = [];
    let subs = Array.isArray(data.sub) ? data.sub : [];
    for (let key of Object.keys(data.categories)) {
      obj[key] = {
        id: +key,
        name: data.categories[key],
        subs: [],
      };
    }
    subs.forEach((item) => {
      let id = item.category;
      let name = item.name;
      let hot = item.hot;
      let temp = obj[id];
      if (temp) {
        temp.subs.push({
          category: id,
          name,
          hot,
        });
        hot && showList.push(name);
      }
    });
    for (let value of Object.values(obj)) {
      if (value.subs.length > 0) {
        cates.push(value);
      }
    }
    cates.sort((a, b) => {
      return a.id - b.id;
    });
    console.log("categorys", cates);

    this.setState({
      showList,
      categorys: cates,
    });
  }
  getShowListEls() {
    let currCateName = this.state.currCateName;
    let list = this.state.showList.map((item) => {
      let cls = item === currCateName ? "show-item choosed" : "show-item";
      return (
        <li
          className={cls}
          key={item}
          onClick={(e) => {
            this.chooseCategory(item);
          }}
        >
          {item}
        </li>
      );
    });
    if (this.state.categorys.length > 0) {
      let cls = this.state.isCatesExpand
        ? "show-item more choosed"
        : "show-item more";
      list.push(
        <li
          className={cls}
          key="more"
          onClick={(e) => {
            this.handleCatesExpand();
          }}
        >
          <SvgIcon iconName="more"></SvgIcon>
        </li>
      );
    }
    return list;
  }
  getCategoryEls() {
    return this.state.categorys.map((item) => {
      let subCategoryEls = this.getSubCategoryEls(item.subs);
      return (
        <li className="category-item" key={item.id}>
          <p className="category-name">{item.name}</p>
          <ul className="sub-list">{subCategoryEls}</ul>
        </li>
      );
    });
  }
  getSubCategoryEls(list) {
    let currName = this.state.currCateName;
    return list.map((sub) => {
      let name = sub.name;
      let cls = sub.hot ? "name hot" : "name";
      name === currName && (cls += " choosed");
      return (
        <li className="sub-item" key={name}>
          <span
            className={cls}
            onClick={(e) => {
              this.chooseCategory(name);
            }}
          >
            {name}
          </span>
        </li>
      );
    });
  }
  chooseCategory(name) {
    this.setState((state) => {
      if (state.currCateName !== name) {
        this.props.onChoosed(name);
      }
      return {
        currCateName: name,
      };
    });
  }
  handleCatesExpand() {
    this.setState((state) => {
      return {
        isCatesExpand: !state.isCatesExpand,
      };
    });
  }

  render() {
    let showListEls = this.getShowListEls();
    let categoryEls = this.getCategoryEls();
    let cateListCls = this.state.isCatesExpand
      ? "category-list expand"
      : "category-list";
    return (
      <div className="song-list-category">
        <ul className="show-list">{showListEls}</ul>
        <ul className={cateListCls}>{categoryEls}</ul>
      </div>
    );
  }
}
