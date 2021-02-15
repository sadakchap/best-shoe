import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateCategory from './components/admin/CreateCategory';
import CreateProduct from './components/admin/CreateProduct';
import ManageCategory from './components/admin/ManageCategory';
import ManageOrders from './components/admin/ManageOrder';
import ManageProducts from './components/admin/ManageProducts';
import UpdateCategory from './components/admin/UpdateCategory';
import UpdateProduct from './components/admin/UpdateProduct';
import ConfirmEmail from './components/auth/ConfirmEmail';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Cart from './components/core/Cart';
import Home from './components/core/Home';
import PaymentCallback from './components/util/PaymentCallback';
import AdminRoute from './components/protectedRoutes/AdminRoute';
import PrivateRoute from './components/protectedRoutes/PrivateRoute';
import ScrollToTop from './components/util/ScrollToTop';
import AdminDashboard from './components/user/AdminDashboard';
import UserDashboard from './components/user/UserDashboard';

const Routes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signup" component={Signup} exact />
                <Route path="/signin" component={Signin} exact />
                <Route path="/cart" component={Cart} exact />
                <Route path="/user/verify/:token" component={ConfirmEmail} exact />
                <PrivateRoute path="/user/dashboard" component={UserDashboard} exact />
                <AdminRoute path="/admin/dashboard" component={AdminDashboard} exact />
                <AdminRoute path="/admin/create/products" component={CreateProduct} exact />
                <AdminRoute path="/admin/products/edit/:productId" component={UpdateProduct} exact />
                <AdminRoute path="/admin/category/edit/:categoryId" component={UpdateCategory} exact />
                <AdminRoute path="/admin/create/categories" component={CreateCategory} exact />
                <AdminRoute path="/admin/manage/products" component={ManageProducts} exact />
                <AdminRoute path="/admin/manage/categories" component={ManageCategory} exact />
                <AdminRoute path="/admin/manage/orders" component={ManageOrders} exact />
                <Route path="/payment/callback/:data" component={PaymentCallback} exact />
            </Switch>
        </Router>
    )
}

export default Routes
