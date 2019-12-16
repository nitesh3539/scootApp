import React, { PureComponent } from 'react'
import { View, Text, Image, ImageBackground, Dimensions, StyleSheet, TextInput } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Header, Body, Input, Icon, Picker, Content } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';

const SLIDER_1_FIRST_ITEM = 0;
const { width: viewportWidth } = Dimensions.get('window');


const sliderWidth = viewportWidth;
const itemWidth = viewportWidth;
export default class HomeScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null,
            data: [{ id: 1 }, { id: 2 }, { id: 3 }]
        };
    }
    _populatePickerItems(reasonsList) {
        return reasonsList.map(data => {
            return <Picker.Item label={data.name + ""} value={data.value + ''} key={data.id + ""} />
        })
    }

    _renderCrouselView() {
        return (
            <Carousel
                ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                data={this.state.data}
                renderItem={({ item, index }) => this._renderItem(item, index)}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                firstItem={SLIDER_1_FIRST_ITEM}
                inactiveSlideScale={1}
                inactiveSlideOpacity={0.7}
                enableMomentum={false}
                loop={false}
                onSnapToItem={(index) => {
                    this.setState({ slider1ActiveSlide: index })
                }}
            >
            </Carousel>
        )
    }

    _renderItem() {
        return (
            <ImageBackground style={{ height: 300, justifyContent: 'center', alignItems: 'center' }} source={require('./images/crousel.png')} >
                <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontWeight: 'bold', paddingLeft: '20%', paddingRight: '20%', marginTop: 0 }}>
                    Experiences curated for every interest.
                </Text>
                <Text style={{ color: '#fff', fontSize: 14, textAlign: 'center', paddingLeft: '15%', paddingRight: '15%', paddingTop: 20 }}>
                    Your place to find unique experiences hosted by fun locals in your city.
                </Text>
            </ImageBackground>
        )
    }

    renderImageText(path, name) {
        return (
            <View>
                <Image
                    source={require(`./images/ScootSocials.png`)}
                    resizeMode={'cover'}
                />

                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 60, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', opacity: 0.8 }}>{name}</Text>
                </View>
            </View>
        )
    }

    renderBrowseCategories() {
        return (
            <View style={{ padding: 10, marginTop: 30 }}>
                <Text style={{ color: 'rgba(34, 34, 34, 1)', fontWeight: 'bold', fontSize: 20, opacity: 0.7 }}>
                    BROWSE CATEGORIES
                </Text>
                <ScrollView horizontal={true} contentContainerStyle={{ marginTop: 20, marginLeft: -10, }} >
                    {this.renderImageText("./images/ScootSocials.png", 'Scoot Socials')}
                    {this.renderImageText("./images/ScootSocials.png", 'Live Music')}
                    {this.renderImageText("./images/ScootSocials.png", 'Scoot Socials')}
                    {this.renderImageText("./images/ScootSocials.png", 'Live Music')}
                </ScrollView>
                <View style={{ backgroundColor: '#a1a1a1', height: 1.2, marginTop: 20, marginBottom: 10, marginLeft: 5, marginRight: 5, opacity: 0.5 }} />
            </View>
        )
    }

    renderItemView() {
        return (
            <Image source={require("./images/scoot.png")} style={{ marginRight: 15 }} />
        )
    }

    renderArrayRowView() {
        let data = [1, 2, 3, 4]
        return (
            <ScrollView horizontal={true} style={{ flexDirection: 'row', marginTop: 20 }}>
                {data.map((item) => {
                    return this.renderItemView()
                })}
            </ScrollView>
        )

    }

    renderViewedCategories() {
        return (
            <View style={{ padding: 10 }}>
                <Text style={{ color: 'rgba(34, 34, 34, 1)', fontWeight: 'bold', fontSize: 20, opacity: 0.7 }}>
                    RECENTLY VIEWED
                </Text>
                {this.renderArrayRowView()}
                <View style={{ backgroundColor: '#a1a1a1', height: 1.2, marginTop: 20, marginBottom: 10, marginLeft: 5, marginRight: 5, opacity: 0.5 }} />
            </View>
        )
    }

    renderExperienceCategories() {
        return (
            <View style={{ padding: 10 }}>
                <Text style={{ color: 'rgba(34, 34, 34, 1)', fontWeight: 'bold', fontSize: 20, opacity: 0.7 }}>
                    TOP EXPERIENCE NEAR YOU
                </Text>
                {this.renderArrayRowView()}
                <View style={{ backgroundColor: '#a1a1a1', height: 1.2, marginTop: 20, marginBottom: 10, marginLeft: 5, marginRight: 5, opacity: 0.5 }} />
            </View>
        )
    }

    renderSearchBar() {
        return (
            <View style={{ position: 'absolute', paddingTop: 115, top: 210, width: '90%', margin: 10, zIndex: 6 }}>
                <View
                    style={{
                        height: 40,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        padding: 20,
                        alignItems: 'center',
                    }}>
                    <Icon name="ios-search" style={{ fontSize: 20, marginRight: 5 }} />
                    <Input
                        placeholder={"Search experiences"}
                        placeholderTextColor={'#b4b4b4'}
                    />
                </View>
            </View>
        )
    }

    _renderPagination() {
        const { slider1ActiveSlide, slider1Ref } = this.state;
        return (
            <View
                style={style.tabBar}
            >
                <Pagination
                    dotsLength={3}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={style.paginationContainer}
                    dotColor={'#fff'}
                    dotStyle={style.paginationDot}
                    inactiveDotColor={'rgb(255, 255, 255)'}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={1}
                    carouselRef={slider1Ref}
                    tappableDots={slider1Ref}
                />
            </View>

        )
    }

    _renderCrousel() {
        return (
            <View>
                {this._renderCrouselView()}
                {this._renderPagination()}
            </View>
        )
    }
    showBody() {
        return (
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, width: '100%', alignItems: 'center' }}>
                <Image style={{ color: 'rgba(255, 91, 0, 1)' }} source={require('./images/MyScoot_coloured.png')} />
                <View style={{ flexDirection: 'row', marginRight: '5%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: '400' }}>
                        GREATER NOIDA
                     </Text>
                    <Icon name="keyboard-arrow-down" type="MaterialIcons" style={{}} />
                </View>
            </View>
        )
    }
    render() {
        return (
            <Content style={{ backgroundColor: '#d4d4d4' }}>
                <Header searchBar style={[{
                    backgroundColor: '#fff', borderBottomWidth: 0,
                    padding: 0,
                    paddingRight: 0,
                    paddingLeft: 0
                }]}>
                    <Body>
                        {this.showBody()}
                    </Body>
                </Header>
                {this._renderCrousel()}
                {this.renderSearchBar()}
                {this.renderBrowseCategories()}
                {this.renderViewedCategories()}
                {this.renderExperienceCategories()}
                <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                    <Image source={require('./images/scoot2.png')} resizeMode="stretch" width="120%" />
                </View>
            </Content>

        )
    }
}

const style = StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        padding: 10
    },
    paginationContainer: {

    },
    tabBar: {
        width: '0%',
        position: 'absolute',
        marginLeft: '37%',
        top: 220,
        right: 0,
        bottom: 0,
        left: 0,
        borderColor: '#fff',
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    }
})