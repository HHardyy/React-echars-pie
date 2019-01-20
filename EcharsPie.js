import React,{Component} from 'react'
import './echarspie.css'

let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/title')

class EcharsPie extends Component{
	constructor(props) {
        super(props)
        this.setPieOption = this.setPieOption.bind(this)
        this.initPieChart = this.initPieChart.bind(this)
    }
    initPieChart() {
        const { data } = this.props
        const { title } = this.props
        let myChart = echarts.init(this.refs.pieChartsBox)
        let options = this.setPieOption(data,title)
        myChart.setOption(options)
    }
    componentDidMount() {
        this.initPieChart()
    }
    componentDidUpdate() {
        this.initPieChart()
    }
    setPieOption(data,tit) {
        return {
            title:{
              text:tit,
              left:"center",
              textStyle: {
                   fontSize: 14,
                   fontFamily:"微软雅黑",
                   fontWeight: '400',
                   color: '#6887ff'        
               },
            },
            visualMap: {
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name: tit,
                    type: 'pie',
                    data: data,
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            },
                            show: true,
                            formatter: '{b}: {c} - ({d}%)'
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#f18f8d'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#4a6fff',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }
	render(){
		return (
			<div className="h-echarspie-box">
			    <div ref="pieChartsBox" style={{width:'100%',height:'100%'}}></div>
		    </div>
		)
	}
}
export default EcharsPie