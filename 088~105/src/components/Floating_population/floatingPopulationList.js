import React, { Component } from 'react';
import axios from "axios";

class floatingPopulationList extends Component {
    constructor(props) {
        super(props);

        this.state={
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi= async () => {
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002344&TDCAccessKey=9570337bf0a4273bec70b2be31a816444c7f76eff0d5427e0ed4e7a33cfdb7e8&$count=30', {
    }).then( response => {
        try {
            this.setState({ responseFPList: response });
            this.setState({ append_FPList: this.FloatPopulListAppend() });
        } catch (error) {
            alert(error)
        }
    }). catch (error => {alert(error);return false;})
        }

        FloatPopulListAppend = () => {
            let result = []
            var FPList = this.state.responseFPList.data
            var jsonString = JSON.stringify(FPList)
            jsonString = jsonString.replace(/\(1시간단위\)/g, '')
            jsonString = jsonString.replace(/\(10세단위\)/g, '')
            var json = JSON.parse(jsonString)

        for(let i=0; i<json.entry.length; i++){
            var data = json.entry[i]
            var idx = i+1
            result.push(
                <tr class="hidden_type">
                    <td>{idx}</td>
                    <td>{data.일자}</td>
                    <td>{data.시간}</td>
                    <td>{data.연령대}</td>
                    <td>{data.성별}</td>
                    <td>{data.시}</td>
                    <td>{data.군구}</td>
                    <td>{data.유동인구수}</td>
                </tr>
                )
            }
            return result
        }
        
        render (){
            return(
                <section class="sub_wrap" >
                <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div class="li_top">
                        <h2 class="s_tit1">서울시 유동인구 데이터 - 20년 12월</h2>
                    </div>
                    <div class="list_cont list_cont_admin">
                        <table class="table_ty1 fp_tlist">
                            <tr>
                                <th>Row</th>
                                <th>일자</th>
                                <th>시간</th>
                                <th>연령대</th>
                                <th>성별</th>
                                <th>시</th>
                                <th>군구</th>
                                <th>유동인구수</th>
                            </tr>
                        </table>	
                        <table class="table_ty2 fp_tlist">
                            {this.state.append_FPList}
                        </table>
                    </div>
                </article>
            </section>
            )
        }
        

    }
    // render () {
    //     return (
    //         <section className="sub_wrap" >
    //             <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
    //                 <div className="li_top">
    //                     <h2 className="s_tit1">서울시 유동인구 데이터 - 19년 11월</h2>
    //                 </div>
    //                 <div className="list_cont list_cont_admin">
    //                     <table className="table_ty1 fp_tlist">
    //                         <tbody>
    //                         <tr>
    //                             <th>Row</th>
    //                             <th>일자</th>
    //                             <th>시간</th>
    //                             <th>연령대</th>
    //                             <th>성별</th>
    //                             <th>시</th>
    //                             <th>군구</th>
    //                             <th>유동인구수</th>
    //                         </tr>
    //                         </tbody>
    //                     </table>	
    //                     <table className="table_ty2 fp_tlist">
    //                         <tbody>
    //                         <tr className="hidden_type">
    //                             <td>1</td>
    //                             <td>20191101</td>
    //                             <td>00</td>
    //                             <td>40</td>
    //                             <td>여성</td>
    //                             <td>서울</td>
    //                             <td>영등포구</td>
    //                             <td>32670</td>
    //                         </tr>
    //                         <tr className="hidden_type">
    //                             <td>1</td>
    //                             <td>20191101</td>
    //                             <td>00</td>
    //                             <td>50</td>
    //                             <td>남성</td>
    //                             <td>서울</td>
    //                             <td>구로구</td>
    //                             <td>27888</td>
    //                         </tr>
    //                         </tbody>
    //                     </table>
    //                 </div>
    //             </article>
    //         </section>
    //     );
    // }


export default floatingPopulationList;