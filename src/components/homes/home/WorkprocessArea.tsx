
import React from 'react';

const WorkprocessArea = () => {
  return (
    <>
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                
                <h2 className="mb-4">Our Working Process</h2>
                <p className="mb-5">
                  Simple, transparent and built for Aussie businesses that want real growth – fast.
                </p>
                <a href="#" className="btn btn-primary"><span>READ MORE</span><span>READ MORE</span></a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">

                <div className="process-card">
                  <div className="number">1</div>
                  <div className="process-text">
                    <h4>Strategy Kick-Off</h4>
                    <p className="mb-0">We learn everything about your brand, customers and goals to map the smartest path forward.

                    </p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number">2</div>
                  <div className="process-text">
                    <h4>Creative & Technical Build</h4>
                    <p className="mb-0">Stunning ads, landing pages and automation – all designed and launched without the drama.</p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number">3</div>
                  <div className="process-text">
                    <h4>Performance Tracking & Tweaks</h4>
                    <p className="mb-0">Daily monitoring, A/B testing and smart optimisation so every dollar works harder.

                    </p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number">4</div>
                  <div className="process-text">
                    <h4>Clear Reporting & Next-Level Growth</h4>
                    <p className="mb-0">Easy-to-read monthly updates plus fresh strategies to keep scaling your results.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default WorkprocessArea;