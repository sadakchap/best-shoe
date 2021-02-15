import React, { useEffect, useState } from 'react';
import AdminBase from '../../core/AdminBase';
import { ResponsiveLine } from '@nivo/line';
import { isAuth } from '../../auth/helpers/auth';
import { getOrdersGrouped } from '../../admin/helpers/adminApicalls';
import { OrderChartWrapper, ChartWrapper, CardsWrapper, ChartTitle, Card, CardDetail } from './AdminElements';
import { MdAddShoppingCart } from 'react-icons/md';
import { BiRupee, BiSupport } from 'react-icons/bi';
import { BsPersonPlus, BsFileEarmarkPlus } from 'react-icons/bs';
import { AiOutlineProject } from 'react-icons/ai';

const SalesChart = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 25, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        colors={{ scheme: 'category10' }}
        lineWidth={3}
        pointSize={2}
        pointBorderWidth={4}
        pointBorderColor={{ from: 'serieColor' }}
        enableArea={true}
        theme={{
          textColor: "#e6e6e6",
          tooltip: {
            container: {
              background: '#001229',
              fontSize: '0.9rem',
            }
          }
        }}
        areaBaselineValue={0}
        axisLeft={{
            tickSize: 5,
            legendOffset: -40,
        }}
        useMesh={true}
    />
)

const EarningsChart = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 25, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: '0', max: 'auto', stacked: true, reverse: false }}
        colors={{ scheme: 'category10' }}
        curve="natural"
        lineWidth={3}
        pointSize={0}
        pointBorderWidth={4}
        pointBorderColor={{ from: 'serieColor' }}
        enableArea={true}
        theme={{
          textColor: "#ccc",
          tooltip: {
            container: {
              background: '#001229',
              fontSize: '0.9rem',
            }
          },
        }}
        areaBaselineValue={0}
        axisLeft={{
            tickSize: 5,
            legendOffset: -40,
        }}
        useMesh={true}
    />
)

const AdminDashboard = () => {

  const [saleData, setSaleData] = useState([]);
  const [earningData, setEarningData] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);

  const {user: {_id: userId, name}, token} = isAuth();

  useEffect(() => {
    getOrdersGrouped(userId, token).then(result => {
      console.log(result);
      setSaleData([{
        id: "products",
        data: (result.map(data => ({ x: data._id, y: data.sold }))).sort((a, b) => {
          const prev = parseInt(a.x.split("-")[2]);
          const next = parseInt(b.x.split("-")[2]);
          return prev - next;
        })
      }]);

      setTotalSales(result.reduce((acc, cur) => (acc + cur.sold), 0));
      setTotalEarnings(result.reduce((acc, cur) => (acc + cur.totalAmount), 0));

      setEarningData([{
        id: "Earnings",
        data: (result.map(data => ({ x: data._id, y: data.totalAmount }))).sort((a, b) => {
          const prev = parseInt(a.x.split("-")[2]);
          const next = parseInt(b.x.split("-")[2]);
          return prev - next;
        })
      }])

    }).catch(err => {
      console.log(err);
    });
    // eslint-disable-next-line
  }, [])


  return (
    <AdminBase title="Dashboard" desc={`Good Morning ${name}!`}>
      <OrderChartWrapper>
        <ChartWrapper>
          <ChartTitle>Sales Stastics</ChartTitle>
          <SalesChart data={saleData} />
        </ChartWrapper>
        <CardsWrapper>
          <Card>
            <CardDetail>
              <h3>Total Sales</h3>
              <p>{totalSales}</p>
              <small>Sales this week</small>
            </CardDetail>
            <MdAddShoppingCart size="2.5rem" />
          </Card>
          <Card>
            <CardDetail>
              <h3>New Clients</h3>
              <p>236</p>
              <small>new people this week</small>
            </CardDetail>
            <BsPersonPlus size="2.5rem" />
          </Card>
          <Card>
            <CardDetail>
              <h3>New Projects</h3>
              <p>1538</p>
            </CardDetail>
            <BsFileEarmarkPlus size="2.5rem" />
          </Card>
        </CardsWrapper>
      </OrderChartWrapper>
      <br/>
      <OrderChartWrapper>
        <CardsWrapper>
          <Card>
            <CardDetail>
              <h3>Total Earnings</h3>
              <p>₹ {totalEarnings}</p>
              <small>Earnings this week</small>
            </CardDetail>
            <BiRupee size="2.5rem" />
          </Card>
          <Card>
            <CardDetail>
              <h3>Support</h3>
              <p>598</p>
              <small>Tickets resolved</small>
            </CardDetail>
            <BiSupport size="2.5rem" />
          </Card>
          <Card>
            <CardDetail>
              <h3>Projects</h3>
              <p>8</p>
              <small>Projects completed</small>
            </CardDetail>
            <AiOutlineProject size="2.5rem" />
          </Card>
        </CardsWrapper>
        <ChartWrapper>
          <ChartTitle>Earnings Stastics</ChartTitle>
          <EarningsChart data={earningData} />
        </ChartWrapper>
      </OrderChartWrapper>
    </AdminBase>
  )
}

export default AdminDashboard
