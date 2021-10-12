import React from "react";
import { Route } from "react-router-dom";
import ArticleDetail from "./containers/ArticleDetailView";
import ArticleList from "./containers/ArticleListView";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/:article_id' component={ArticleDetail} />
    </div>
);


export default BaseRouter;