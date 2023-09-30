import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import Tabs from "./Tabs";
import Context from "./Context";

const Settings = () => {
    return (
        <div>
            <Breadcrumbs title="Settings" />

            {/* <div className="row">
                <Tabs />    
                <Context />
            </div>             */}

            <div class="card-content collapse show">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <Tabs />
                        </div>
                        <div class="col-lg-9 col-md-6 col-sm-12">
                            <Context />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Settings;