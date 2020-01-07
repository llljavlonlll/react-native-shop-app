import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import GoodsScreen from "../screens/GoodsScreen";
import CartScreen from "../screens/CartScreen";
import GoodDetailsScreen from "../screens/GoodDetailsScreen";
import OrdersScreen from "../screens/OrdersScreen";
import YourGoodsScreen from "../screens/YourGoodsScreen";
import AddEditGoodsScreen from "../screens/AddEditGoodScreen";

const defaultStackConfig = {
    headerTitleStyle: {
        fontFamily: "open-sans-bold"
    },
    headerLayoutPreset: "center"
};

const ShopNavigator = createStackNavigator(
    {
        Goods: GoodsScreen,
        Cart: CartScreen,
        GoodDetails: GoodDetailsScreen
    },
    defaultStackConfig
);

const OrdersNavigator = createStackNavigator(
    { Orders: OrdersScreen },
    defaultStackConfig
);

const ManageProductsNavigator = createStackNavigator(
    {
        YourGoods: YourGoodsScreen,
        EditGood: AddEditGoodsScreen
    },
    defaultStackConfig
);

const MainNavigator = createDrawerNavigator(
    {
        Shop: ShopNavigator,
        Orders: OrdersNavigator,
        Manage: ManageProductsNavigator
    },
    {}
);

export default createAppContainer(MainNavigator);
