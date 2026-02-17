import React, { useState } from 'react';
import { Briefcase, Code, Award, ExternalLink, Globe, Server, Database, Cloud, Activity, Mail, Phone, Link as LinkIcon } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ko'>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ko' : 'en');
  };

  const content = {
    en: {
      profile: {
        name: "Bang Gyeong-tae",
        role: "Backend Engineer | Digital Twin Platform",
        summary: "A Backend Engineer who drives results through system redesign and observability improvements in high-traffic and cost-sensitive environments. I ask, 'Why don't we try changing this first?' to solve fundamental problems.",
        contact: {
          email: "rudxoghd@naver.com", 
          portfolio: "Portfolio Link"
        }
      },
      titles: {
        projects: "Key Projects",
        experience: "Experience",
        skills: "Core Skills",
        education: "Education & Awards",
        stack: "Stack",
        results: "Key Results"
      },
      projects: [
        {
          name: "Pivo Tour & Track | Digital Twin",
          period: "2021.06 ~ Present",
          desc: "Resolving concurrency issues and redesigning transaction structures.",
          details: [
            "Eliminated Race Conditions: Redesigned data processing logic.",
            "Sync → Async Transition: Introduced responsibility segregation architecture."
          ],
          results: [
            "Monthly VoC reduced by 30~35%",
            "Bug reproduction/analysis time shortened by 45%",
            "Average latency reduced by 38%"
          ],
          stack: ["Java", "Spring Boot", "MySQL", "Redis", "AWS EC2"]
        },
        {
          name: "BEAMO | Digital Twin PaaS",
          period: "2023.06 ~ Present",
          desc: "Implemented elastic scaling using MQ + KEDA and optimized serverless architecture.",
          details: [
            "Elastic Scale Structure: Auto-scaling responsive to traffic fluctuations.",
            "Cold Start Elimination: Optimized AWS Lambda architecture.",
            "Async Processing: Decoupled message-based processing."
          ],
          results: [
            "Saved approx. 3M KRW per instance/month",
            "Total infrastructure cost reduced by 15~18%",
            "Idle resource usage reduced by 40%"
          ],
          stack: ["Node.js", "NestJS", "Kafka", "K8s (EKS)", "KEDA", "Prometheus", "Grafana"]
        },
        {
          name: "IoT Digital Twin Integration",
          period: "2024.06 ~ 2024.08",
          desc: "Centralized logs/metrics and mapped 3D space-sensor data in real-time.",
          details: [
            "Observability Integration: Centralized monitoring system.",
            "Real-time Mapping: Secured visualization accuracy."
          ],
          results: [
            "MTTD (Mean Time To Detect) shortened by 60%",
            "Operational monitoring effort reduced by 50%",
            "PoC to Contract conversion rate +25%"
          ],
          stack: ["Grafana", "Loki", "Fluent Bit", "Node.js", "MySQL", "MongoDB"]
        }
      ],
      experience: [
        {
          company: "3i Inc.",
          period: "2024.11 ~ Present",
          role: "Digital Twin Team",
          desc: "Operating and designing global B2B/B2C Digital Twin platforms. responding to enterprise architecture for major clients like Samsung and NTT."
        },
        {
          company: "TmaxSoft",
          period: "2021.02 ~ 2024.09",
          role: "Commerce Division",
          desc: "Developed backend for POS, ERP, CRM, and Payment platforms. Performed large-scale legacy migration and designed core logic for integrated auth/payment systems."
        }
      ],
      education: [
        "Kwangwoon University - Computer Engineering (GPA 4.1)",
        "Engineer Information Processing / AIoT Specialist Certification",
        "Awards: Graduation Exhibition Excellence Award (2024), Hackathon Excellence Award (2024)"
      ],
      skillCategories: {
        backend: "Backend",
        infra: "Infra & DevOps",
        data: "Data",
        observability: "Observability"
      }
    },
    ko: {
      profile: {
        name: "방경태",
        role: "Backend Engineer | Digital Twin Platform",
        summary: "트래픽 폭증·비용 압박 환경에서 재설계와 관측성 개선으로 성과를 만들어온 백엔드 엔지니어입니다. \"이것부터 바꿔보면 어떨까요?\"라는 질문으로 문제의 본질을 해결합니다.",
        contact: {
          phone: "010-4042-3550",
          email: "rudxoghd@naver.com", 
          portfolio: "포트폴리오 링크"
        }
      },
      titles: {
        projects: "주요 프로젝트",
        experience: "경력",
        skills: "보유 기술",
        education: "학력 및 수상",
        stack: "사용 기술",
        results: "성과 지표"
      },
      projects: [
        {
          name: "Pivo Tour & Track | Digital Twin",
          period: "2021.06 ~ 현재",
          desc: "동시성 이슈 해결을 위한 데이터 처리 로직 개선 및 트랜잭션 구조 재설계.",
          details: [
            "Race Condition 제거: 데이터 처리 로직 개선",
            "Sync → Async 구조 전환: 책임 분리 아키텍처 도입"
          ],
          results: [
            "월별 VoC 30~35% 감소",
            "장애 재현/분석 시간 45% 단축",
            "평균 처리 지연시간 38% 감소"
          ],
          stack: ["Java", "Spring Boot", "MySQL", "Redis", "AWS EC2"]
        },
        {
          name: "BEAMO | Digital Twin PaaS",
          period: "2023.06 ~ 현재",
          desc: "MQ + KEDA 기반 탄력 스케일 구조 도입 및 서버리스 아키텍처 최적화.",
          details: [
            "탄력 스케일 구조: 트래픽 변동에 유연한 오토스케일링",
            "Cold Start 제거: AWS Lambda 구조 전환",
            "비동기 처리 분리: 시스템 안정성 및 처리량 증대"
          ],
          results: [
            "인스턴스당 월 비용 약 300만원 절감",
            "전체 인프라 비용 15~18% 절감",
            "유휴 리소스 사용률 -40% 감소"
          ],
          stack: ["Node.js", "NestJS", "Kafka", "K8s (EKS)", "KEDA", "Prometheus", "Grafana"]
        },
        {
          name: "IoT Digital Twin Integration",
          period: "2024.06 ~ 2024.08",
          desc: "로그 및 메트릭 중앙 집중화 및 3D 공간-센서 데이터 실시간 매핑.",
          details: [
            "모니터링 기반 관측성 통합",
            "3D 공간-센서 데이터 실시간 매핑 정확도 확보"
          ],
          results: [
            "장애 감지 시간(MTTD) 60% 단축",
            "운영 인력 모니터링 공수 50% 절감",
            "고객 PoC → 실계약 전환율 +25%"
          ],
          stack: ["Grafana", "Loki", "Fluent Bit", "Node.js", "MySQL", "MongoDB"]
        }
      ],
      experience: [
        {
          company: "(주) 쓰리아이",
          period: "2024.11 ~ 현재",
          role: "Digital Twin Team",
          desc: "글로벌 B2B/B2C 디지털 트윈 플랫폼 운영 및 설계. 삼성, NTT 등 대형 고객사 엔터프라이즈 아키텍처 대응."
        },
        {
          company: "티맥스소프트",
          period: "2021.02 ~ 2024.09",
          role: "Commerce Division",
          desc: "POS·ERP·CRM·결제 플랫폼 백엔드 개발. 레거시 시스템 대규모 마이그레이션 수행 및 통합 인증/결제 코어 설계."
        }
      ],
      education: [
        "광운대학교 컴퓨터공학 (GPA 4.1)",
        "정보처리기사 · AIoT 실무자 자격증 취득",
        "수상: 졸업전 우수상 (2024), 해커톤 우수상 (2024)"
      ],
      skillCategories: {
        backend: "Backend",
        infra: "Infra & DevOps",
        data: "Data",
        observability: "Observability"
      }
    }
  };

  const t = content[lang];

  return (
    <div className="w-full max-w-5xl mx-auto pb-20 relative">
      
      {/* Language Toggle */}
      <div className="flex justify-end mb-4 animate-fade-in-up">
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors text-gray-300 hover:text-white pointer-events-auto backdrop-blur-md"
        >
          <Globe size={16} />
          {lang === 'en' ? '한국어' : 'English'}
        </button>
      </div>

      <div className="space-y-12">
        {/* Header & Intro Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 animate-fade-in-up shadow-2xl">
          <div className="border-b border-white/10 pb-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-500">
              {t.profile.name}
            </h1>
            <p className="text-xl text-amber-400 font-medium mb-6">{t.profile.role}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-300 pointer-events-auto">
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Phone size={14} /> {t.profile.contact.phone}
                </span>
                <a href={`mailto:${t.profile.contact.email}`} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors">
                    <Mail size={14} /> Email
                </a>
                <a href="https://thorn-may-855.notion.site/Portfolio-10cf5704021c80e3a5c2c95640701a39" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-200 hover:bg-amber-500/30 transition-colors">
                    <LinkIcon size={14} /> {t.profile.contact.portfolio}
                </a>
            </div>
          </div>

          <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
            {t.profile.summary}
          </p>
        </div>

        {/* Projects Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-amber-400" size={24} />
              <h2 className="text-2xl font-bold text-white">{t.titles.projects}</h2>
            </div>

            <div className="grid gap-6">
                {t.projects.map((project, index) => (
                    <div key={index} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-amber-500/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                            <h3 className="text-xl font-bold text-white">{project.name}</h3>
                            <span className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full">{project.period}</span>
                        </div>
                        
                        <p className="text-gray-300 mb-6 italic">{project.desc}</p>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                            <div>
                                <h4 className="text-sm font-bold text-amber-400 mb-3 uppercase tracking-wider">Work Details</h4>
                                <ul className="space-y-2">
                                    {project.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/50 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-amber-400 mb-3 uppercase tracking-wider">{t.titles.results}</h4>
                                <ul className="space-y-2">
                                    {project.results.map((res, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/50 flex-shrink-0" />
                                            {res}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                            <span className="text-xs text-gray-500 mr-2 self-center">{t.titles.stack}:</span>
                            {project.stack.map((tech) => (
                                <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Experience */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-amber-400" size={24} />
              <h2 className="text-2xl font-bold text-white">{t.titles.experience}</h2>
            </div>
            
            <div className="space-y-10">
              {t.experience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l border-white/10 hover:border-amber-500/50 transition-colors group">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-black border-2 border-amber-500" />
                  <span className="text-xs font-mono text-amber-400 mb-1 block">{job.period}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{job.company}</h3>
                  <p className="text-sm text-gray-400 mb-2">{job.role}</p>
                  <p className="text-sm text-gray-300">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Education */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-amber-400" size={24} />
                <h2 className="text-2xl font-bold text-white">{t.titles.skills}</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-amber-200 mb-3 font-semibold">
                        <Server size={14} /> {t.skillCategories.backend}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Java', 'Node.js', 'Spring Boot', 'NestJS'].map(s => (
                            <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">{s}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-sm text-amber-200 mb-3 font-semibold">
                        <Cloud size={14} /> {t.skillCategories.infra}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Kubernetes', 'AWS', 'Terraform', 'ArgoCD', 'Jenkins'].map(s => (
                            <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">{s}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-sm text-amber-200 mb-3 font-semibold">
                        <Database size={14} /> {t.skillCategories.data}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['MySQL', 'MongoDB', 'Redis', 'Kafka'].map(s => (
                            <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">{s}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-sm text-amber-200 mb-3 font-semibold">
                        <Activity size={14} /> {t.skillCategories.observability}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Prometheus', 'Grafana', 'Loki'].map(s => (
                            <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">{s}</span>
                        ))}
                    </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-amber-400" size={24} />
                <h2 className="text-xl font-bold text-white">{t.titles.education}</h2>
              </div>
              <ul className="space-y-3">
                  {t.education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                      {edu}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
