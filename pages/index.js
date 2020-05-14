import React from 'react';
import MainLayout from '../components/MainLayout';
import Sectionsbox from '../components/Sectionsbox';
import { useRouter } from 'next/router';

class Home extends React.Component {
    //router = useRouter();

    state = {
        sections: []
    }

    componentDidMount() {
        fetch('http://172.17.68.220:31457/post/section')
            .then(res => res.json())
            .then(res => this.setState({
                sections: res.sections
            }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <MainLayout path={'router.pathname'}>
                <style jsx>{`
                section {
                    width: 100%;
                    float: left;
                    margin-bottom: 9px;
                }

                @media (max-width: 992px) {
                    section {
                        float: none;
                        width: 98%;
                    }
                }

                

                .section {
                    display: flex;
                }

                .section:hover {
                    background-color: rgba(0,0,0, 0.1);
                }

                .section__icon {
                    width: 30px;
                    margin-left: 15px;
                    margin-top: 5px;
                }

                .section__icon img {
                    width: 24px;
                    padding-bottom: 5px;
                }

                .section__info {
                    width: 90%;
                    height: 100%;
                    margin-left: 7px;
                    margin-top: 8px;
                }

                .section-link {
                    color: #313131;
                    text-decoration: none;
                    display: block;
                    font-weight: bold;
                }

                .sections-link span {
                    display: inline-block;
                    margin-top: 10px;
                }
            `}</style>
                <section>
                    <Sectionsbox>
                        {
                            this.state.sections.map(section => {
                                return (
                                    <a className="section-link" href={'/' + section.id}>
                                        <div className="section">
                                            <div className="section__icon">
                                                <img src="/section-icon.png" alt="Іконка для розділу" />
                                            </div>
                                            <div className="section__info">
                                                <span>{section.title}</span>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })
                        }
                    </Sectionsbox>
                </section>
            </MainLayout>
        )
    }
}

export default Home;